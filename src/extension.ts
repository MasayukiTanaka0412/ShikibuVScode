// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "shikibuvscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('shikibuvscode.loadaudio', () => {
		
		writeText('Audio recognition starts');
		

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

export function writeText(txtToBeWrttien : string){
	let editor = vscode.window.activeTextEditor;
	const textEdits: vscode.TextEdit[] = [];
	textEdits.push(vscode.TextEdit.insert(editor.selection.active, txtToBeWrttien));
	textEdits.push(vscode.TextEdit.insert(editor.selection.active, '\r\n'));
	const workEdits = new vscode.WorkspaceEdit();
	workEdits.set(editor.document.uri, textEdits); 
	vscode.workspace.applyEdit(workEdits); 
}
