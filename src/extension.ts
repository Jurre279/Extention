// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

		const editor = vscode.window.activeTextEditor;
		if (editor) {
			editor.edit(editBuilder => {
				const Datum = new Date();
				editBuilder.insert(new vscode.Position(0,0),"<!-- Naam:Jurre Dekkers -->");
				editBuilder.insert(new vscode.Position(0,1),"<!-- Klas:WEB2A -->");
				editBuilder.insert(new vscode.Position(0,2),"<!-- Datum:");
				editBuilder.insert(new vscode.Position(0,3), Datum.toLocaleDateString());
				editBuilder.insert(new vscode.Position(0,4),"-->");
				editBuilder.insert(new vscode.Position(0,5),"<!-- Projectnaam:Temp -->");
			});
		}
		else console.log("error");


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from HelloWorld!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
