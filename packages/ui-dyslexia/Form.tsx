"use client";

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'textarea' | 'select';
    placeholder?: string;
    required?: boolean;
    options?: string[];
    validation?: (value: string) => string | null;
}

interface FormProps {
    fields: FormField[];
    onSubmit: (data: Record<string, string>) => void;
    submitLabel?: string;
    className?: string;
}

export function Form({ fields, onSubmit, submitLabel = 'Submit', className }: FormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateField = (field: FormField, value: string): string | null => {
        if (field.required && !value.trim()) {
            return `${field.label} is required`;
        }

        if (field.validation) {
            return field.validation(value);
        }

        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newErrors: Record<string, string> = {};
        let hasErrors = false;

        fields.forEach(field => {
            const error = validateField(field, formData[field.name] || '');
            if (error) {
                newErrors[field.name] = error;
                hasErrors = true;
            }
        });

        setErrors(newErrors);

        if (!hasErrors) {
            try {
                await onSubmit(formData);
                setFormData({});
            } catch (error) {
                console.error('Form submission error:', error);
            }
        }

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className || ''}`}>
            {fields.map(field => (
                <div key={field.name} className="animate-fade-in">
                    <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                        {field.label}
                        {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>

                    {field.type === 'textarea' ? (
                        <textarea
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            placeholder={field.placeholder}
                            required={field.required}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 transition-colors resize-none ${errors[field.name] ? 'border-red-500' : ''}`}
                            rows={4}
                        />
                    ) : field.type === 'select' ? (
                        <select
                            id={field.name}
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            required={field.required}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 transition-colors ${errors[field.name] ? 'border-red-500' : ''}`}
                        >
                            <option value="">Select {field.label.toLowerCase()}</option>
                            {field.options?.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            value={formData[field.name] || ''}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            placeholder={field.placeholder}
                            required={field.required}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 transition-colors ${errors[field.name] ? 'border-red-500' : ''}`}
                        />
                    )}

                    {errors[field.name] && (
                        <div className="flex items-center mt-1 text-red-600 dark:text-red-400 text-sm">
                            <AlertCircle size={14} className="mr-1" />
                            {errors[field.name]}
                        </div>
                    )}
                </div>
            ))}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition-colors focus-ring flex items-center justify-center"
            >
                {isSubmitting ? (
                    <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                    </>
                ) : (
                    <>
                        <CheckCircle size={16} className="mr-2" />
                        {submitLabel}
                    </>
                )}
            </button>
        </form>
    );
}
