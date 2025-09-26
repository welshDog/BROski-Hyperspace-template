const vscode = require('vscode');
const axios = require('axios');
async function activate(context) {
  let disposable = vscode.commands.registerCommand('perplexity.search', async () => {
    const query = await vscode.window.showInputBox({ prompt: 'Ask Perplexity…' });
    if (!query) return;
    const key = vscode.workspace.getConfiguration('perplexity').get('apiKey');
    const resp = await axios.post('https://api.perplexity.ai/search', { query }, {
      headers: { 'Authorization': `Bearer ${key}` }
    });
    const output = vscode.window.createOutputChannel('Perplexity');
    output.clear();
    resp.data.results.forEach((r, i) => {
      output.appendLine(`» ${r.title}\n${r.snippet}\nSource: ${r.url}\n`);
    });
    output.show();
  });
  context.subscriptions.push(disposable);
}
exports.activate = activate;
