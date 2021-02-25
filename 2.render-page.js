exports.ids=[2],exports.modules={"../node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js":function(e,t,n){"use strict";n.r(t),n.d(t,"flattenDiagnosticMessageText",function(){return c}),n.d(t,"Adapter",function(){return f}),n.d(t,"LibFiles",function(){return g}),n.d(t,"DiagnosticsAdapter",function(){return m}),n.d(t,"SuggestAdapter",function(){return h}),n.d(t,"SignatureHelpAdapter",function(){return v}),n.d(t,"QuickInfoAdapter",function(){return y}),n.d(t,"OccurrencesAdapter",function(){return _}),n.d(t,"DefinitionAdapter",function(){return S}),n.d(t,"ReferenceAdapter",function(){return w}),n.d(t,"OutlineAdapter",function(){return k}),n.d(t,"Kind",function(){return x}),n.d(t,"FormatHelper",function(){return C}),n.d(t,"FormatAdapter",function(){return F}),n.d(t,"FormatOnTypeAdapter",function(){return D}),n.d(t,"CodeActionAdaptor",function(){return I}),n.d(t,"RenameAdapter",function(){return P});var r,i,o=n("../node_modules/monaco-editor/esm/vs/language/typescript/lib/lib.index.js"),s=n("../node_modules/monaco-editor/esm/vs/language/typescript/fillers/monaco-editor-core.js"),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}u((r=r.apply(e,t||[])).next())})},l=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function c(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var o=0,s=e.next;o<s.length;o++){r+=c(s[o],t,n)}return r}function d(e){return e?e.map(function(e){return e.text}).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(i||(i={}));var p,f=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}(),g=function(){function e(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return e.prototype.isLibFile=function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!o.libFileSet[e.path.slice(1)])},e.prototype.getOrCreateModel=function(e){var t=s.editor.getModel(e);return t||(this.isLibFile(e)&&this._hasFetchedLibFiles?s.editor.createModel(this._libFiles[e.path.slice(1)],"javascript",e):null)},e.prototype._containsLibFile=function(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(this.isLibFile(r))return!0}return!1},e.prototype.fetchLibFilesIfNecessary=function(e){return u(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return this._containsLibFile(e)?[4,this._fetchLibFiles()]:[2];case 1:return t.sent(),[2]}})})},e.prototype._fetchLibFiles=function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(function(e){return e.getLibFiles()}).then(function(t){e._hasFetchedLibFiles=!0,e._libFiles=t})),this._fetchLibFilesPromise},e}();!function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(p||(p={}));var m=function(e){function t(t,n,r,i){var o=e.call(this,i)||this;o._libFiles=t,o._defaults=n,o._selector=r,o._disposables=[],o._listener=Object.create(null);var a=function(e){if(e.getModeId()===r){var t,n=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return o._doValidate(e)},500)});o._listener[e.uri.toString()]={dispose:function(){n.dispose(),clearTimeout(t)}},o._doValidate(e)}},u=function(e){s.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(s.editor.onDidCreateModel(a)),o._disposables.push(s.editor.onWillDisposeModel(u)),o._disposables.push(s.editor.onDidChangeModelLanguage(function(e){u(e.model),a(e.model)})),o._disposables.push({dispose:function(){for(var e=0,t=s.editor.getModels();e<t.length;e++){var n=t[e];u(n)}}});var l=function(){for(var e=0,t=s.editor.getModels();e<t.length;e++){var n=t[e];u(n),a(n)}};return o._disposables.push(o._defaults.onDidChange(l)),o._disposables.push(o._defaults.onDidExtraLibsChange(l)),s.editor.getModels().forEach(a),o}return a(t,e),t.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},t.prototype._doValidate=function(e){return u(this,void 0,void 0,function(){var t,n,r,i,o,a,u,c,d,p=this;return l(this,function(l){switch(l.label){case 0:return[4,this._worker(e.uri)];case 1:return t=l.sent(),e.isDisposed()?[2]:(n=[],r=this._defaults.getDiagnosticsOptions(),i=r.noSyntaxValidation,o=r.noSemanticValidation,a=r.noSuggestionDiagnostics,i||n.push(t.getSyntacticDiagnostics(e.uri.toString())),o||n.push(t.getSemanticDiagnostics(e.uri.toString())),a||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return!(u=l.sent())||e.isDisposed()?[2]:(c=u.reduce(function(e,t){return t.concat(e)},[]).filter(function(e){return-1===(p._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)}),d=c.map(function(e){return e.relatedInformation||[]}).reduce(function(e,t){return t.concat(e)},[]).map(function(e){return e.file?s.Uri.parse(e.file.fileName):null}),[4,this._libFiles.fetchLibFilesIfNecessary(d)]);case 3:return l.sent(),e.isDisposed()?[2]:(s.editor.setModelMarkers(e,this._selector,c.map(function(t){return p._convertDiagnostics(e,t)})),[2])}})})},t.prototype._convertDiagnostics=function(e,t){var n=t.start||0,r=t.length||1,i=e.getPositionAt(n),o=i.lineNumber,a=i.column,u=e.getPositionAt(n+r),l=u.lineNumber,d=u.column,p=[];return t.reportsUnnecessary&&p.push(s.MarkerTag.Unnecessary),t.reportsDeprecated&&p.push(s.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:o,startColumn:a,endLineNumber:l,endColumn:d,message:c(t.messageText,"\n"),code:t.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){var n=this;if(t){var r=[];return t.forEach(function(t){var i=e;if(t.file){var o=s.Uri.parse(t.file.fileName);i=n._libFiles.getOrCreateModel(o)}if(i){var a=t.start||0,u=t.length||1,l=i.getPositionAt(a),d=l.lineNumber,p=l.column,f=i.getPositionAt(a+u),g=f.lineNumber,m=f.column;r.push({resource:i.uri,startLineNumber:d,startColumn:p,endLineNumber:g,endColumn:m,message:c(t.messageText,"\n")})}}),r}},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case p.Error:return s.MarkerSeverity.Error;case p.Message:return s.MarkerSeverity.Info;case p.Warning:return s.MarkerSeverity.Warning;case p.Suggestion:return s.MarkerSeverity.Hint}return s.MarkerSeverity.Info},t}(f),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!1,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,i){return u(this,void 0,void 0,function(){var r,i,o,a,u;return l(this,function(l){switch(l.label){case 0:return r=e.getWordUntilPosition(n),i=new s.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=e.uri,a=e.getOffsetAt(n),[4,this._worker(o)];case 1:return[4,l.sent().getCompletionsAtPosition(o.toString(),a)];case 2:return!(u=l.sent())||e.isDisposed()?[2]:[2,{suggestions:u.entries.map(function(r){var u,l=i;if(r.replacementSpan){var c=e.getPositionAt(r.replacementSpan.start),d=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);l=new s.Range(c.lineNumber,c.column,d.lineNumber,d.column)}var p=[];return-1!==(null===(u=r.kindModifiers)||void 0===u?void 0:u.indexOf("deprecated"))&&p.push(s.languages.CompletionItemTag.Deprecated),{uri:o,position:n,offset:a,range:l,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind),tags:p}})}]}})})},t.prototype.resolveCompletionItem=function(e,n){return u(this,void 0,void 0,function(){var n,r,i,o,s;return l(this,function(a){switch(a.label){case 0:return r=(n=e).uri,i=n.position,o=n.offset,[4,this._worker(r)];case 1:return[4,a.sent().getCompletionEntryDetails(r.toString(),o,n.label)];case 2:return(s=a.sent())?[2,{uri:r,position:i,label:s.name,kind:t.convertKind(s.kind),detail:d(s.displayParts),documentation:{value:t.createDocumentationString(s)}}]:[2,n]}})})},t.convertKind=function(e){switch(e){case x.primitiveType:case x.keyword:return s.languages.CompletionItemKind.Keyword;case x.variable:case x.localVariable:return s.languages.CompletionItemKind.Variable;case x.memberVariable:case x.memberGetAccessor:case x.memberSetAccessor:return s.languages.CompletionItemKind.Field;case x.function:case x.memberFunction:case x.constructSignature:case x.callSignature:case x.indexSignature:return s.languages.CompletionItemKind.Function;case x.enum:return s.languages.CompletionItemKind.Enum;case x.module:return s.languages.CompletionItemKind.Module;case x.class:return s.languages.CompletionItemKind.Class;case x.interface:return s.languages.CompletionItemKind.Interface;case x.warning:return s.languages.CompletionItemKind.File}return s.languages.CompletionItemKind.Property},t.createDocumentationString=function(e){var t=d(e.documentation);if(e.tags)for(var n=0,r=e.tags;n<r.length;n++){t+="\n\n"+b(r[n])}return t},t}(f);function b(e){var t="*@"+e.name+"*";if("param"===e.name&&e.text){var n=e.text.split(" "),r=n[0],i=n.slice(1);t+="`"+r+"`",i.length>0&&(t+=" — "+i.join(" "))}else e.text&&(t+=" — "+e.text);return t}var v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return a(t,e),t.prototype.provideSignatureHelp=function(e,t,n){return u(this,void 0,void 0,function(){var n,r,i,o;return l(this,function(s){switch(s.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,s.sent().getSignatureHelpItems(n.toString(),r)];case 2:return!(i=s.sent())||e.isDisposed()?[2]:(o={activeSignature:i.selectedItemIndex,activeParameter:i.argumentIndex,signatures:[]},i.items.forEach(function(e){var t={label:"",parameters:[]};t.documentation={value:d(e.documentation)},t.label+=d(e.prefixDisplayParts),e.parameters.forEach(function(n,r,i){var o=d(n.displayParts),s={label:o,documentation:{value:d(n.documentation)}};t.label+=o,t.parameters.push(s),r<i.length-1&&(t.label+=d(e.separatorDisplayParts))}),t.label+=d(e.suffixDisplayParts),o.signatures.push(t)}),[2,{value:o,dispose:function(){}}])}})})},t}(f),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.provideHover=function(e,t,n){return u(this,void 0,void 0,function(){var n,r,i,o,s,a;return l(this,function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,u.sent().getQuickInfoAtPosition(n.toString(),r)];case 2:return!(i=u.sent())||e.isDisposed()?[2]:(o=d(i.documentation),s=i.tags?i.tags.map(function(e){return b(e)}).join("  \n\n"):"",a=d(i.displayParts),[2,{range:this._textSpanToRange(e,i.textSpan),contents:[{value:"```typescript\n"+a+"\n```\n"},{value:o+(s?"\n\n"+s:"")}]}])}})})},t}(f),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return u(this,void 0,void 0,function(){var n,r,i,o=this;return l(this,function(a){switch(a.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,a.sent().getOccurrencesAtPosition(n.toString(),r)];case 2:return!(i=a.sent())||e.isDisposed()?[2]:[2,i.map(function(t){return{range:o._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?s.languages.DocumentHighlightKind.Write:s.languages.DocumentHighlightKind.Text}})]}})})},t}(f),S=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return a(t,e),t.prototype.provideDefinition=function(e,t,n){return u(this,void 0,void 0,function(){var n,r,i,o,a,u,c,d,p;return l(this,function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,l.sent().getDefinitionAtPosition(n.toString(),r)];case 2:return!(i=l.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(i.map(function(e){return s.Uri.parse(e.fileName)}))];case 3:if(l.sent(),e.isDisposed())return[2];for(o=[],a=0,u=i;a<u.length;a++)c=u[a],d=s.Uri.parse(c.fileName),(p=this._libFiles.getOrCreateModel(d))&&o.push({uri:d,range:this._textSpanToRange(p,c.textSpan)});return[2,o]}})})},t}(f),w=function(e){function t(t,n){var r=e.call(this,n)||this;return r._libFiles=t,r}return a(t,e),t.prototype.provideReferences=function(e,t,n,r){return u(this,void 0,void 0,function(){var n,r,i,o,a,u,c,d,p;return l(this,function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,l.sent().getReferencesAtPosition(n.toString(),r)];case 2:return!(i=l.sent())||e.isDisposed()?[2]:[4,this._libFiles.fetchLibFilesIfNecessary(i.map(function(e){return s.Uri.parse(e.fileName)}))];case 3:if(l.sent(),e.isDisposed())return[2];for(o=[],a=0,u=i;a<u.length;a++)c=u[a],d=s.Uri.parse(c.fileName),(p=this._libFiles.getOrCreateModel(d))&&o.push({uri:d,range:this._textSpanToRange(p,c.textSpan)});return[2,o]}})})},t}(f),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.provideDocumentSymbols=function(e,t){return u(this,void 0,void 0,function(){var t,n,r,i,o=this;return l(this,function(a){switch(a.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return[4,a.sent().getNavigationBarItems(t.toString())];case 2:return!(n=a.sent())||e.isDisposed()?[2]:(r=function(t,n,i){var a={name:n.text,detail:"",kind:A[n.kind]||s.languages.SymbolKind.Variable,range:o._textSpanToRange(e,n.spans[0]),selectionRange:o._textSpanToRange(e,n.spans[0]),tags:[],containerName:i};if(n.childItems&&n.childItems.length>0)for(var u=0,l=n.childItems;u<l.length;u++){var c=l[u];r(t,c,a.name)}t.push(a)},i=[],n.forEach(function(e){return r(i,e)}),[2,i])}})})},t}(f),x=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),A=Object.create(null);A[x.module]=s.languages.SymbolKind.Module,A[x.class]=s.languages.SymbolKind.Class,A[x.enum]=s.languages.SymbolKind.Enum,A[x.interface]=s.languages.SymbolKind.Interface,A[x.memberFunction]=s.languages.SymbolKind.Method,A[x.memberVariable]=s.languages.SymbolKind.Property,A[x.memberGetAccessor]=s.languages.SymbolKind.Property,A[x.memberSetAccessor]=s.languages.SymbolKind.Property,A[x.variable]=s.languages.SymbolKind.Variable,A[x.const]=s.languages.SymbolKind.Variable,A[x.localVariable]=s.languages.SymbolKind.Variable,A[x.variable]=s.languages.SymbolKind.Variable,A[x.function]=s.languages.SymbolKind.Function,A[x.localFunction]=s.languages.SymbolKind.Function;var C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:i.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(f),F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return u(this,void 0,void 0,function(){var r,i,o,s,a=this;return l(this,function(u){switch(u.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return[4,u.sent().getFormattingEditsForRange(r.toString(),i,o,C._convertOptions(n))];case 2:return!(s=u.sent())||e.isDisposed()?[2]:[2,s.map(function(t){return a._convertTextChanges(e,t)})]}})})},t}(C),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!1,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,i){return u(this,void 0,void 0,function(){var i,o,s,a=this;return l(this,function(u){switch(u.label){case 0:return i=e.uri,o=e.getOffsetAt(t),[4,this._worker(i)];case 1:return[4,u.sent().getFormattingEditsAfterKeystroke(i.toString(),o,n,C._convertOptions(r))];case 2:return!(s=u.sent())||e.isDisposed()?[2]:[2,s.map(function(t){return a._convertTextChanges(e,t)})]}})})},t}(C),I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return u(this,void 0,void 0,function(){var r,i,o,s,a,u,c=this;return l(this,function(l){switch(l.label){case 0:return r=e.uri,i=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=C._convertOptions(e.getOptions()),a=n.markers.filter(function(e){return e.code}).map(function(e){return e.code}).map(Number),[4,this._worker(r)];case 1:return[4,l.sent().getCodeFixesAtPosition(r.toString(),i,o,a,s)];case 2:return!(u=l.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:u.filter(function(e){return 0===e.changes.filter(function(e){return e.isNewFile}).length}).map(function(t){return c._tsCodeFixActionToMonacoCodeAction(e,n,t)}),dispose:function(){}}]}})})},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],i=0,o=n.changes;i<o.length;i++)for(var s=0,a=o[i].textChanges;s<a.length;s++){var u=a[s];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,u.span),text:u.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(C),P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.provideRenameEdits=function(e,t,n,r){return u(this,void 0,void 0,function(){var r,i,o,a,u,c,d,p,f,g;return l(this,function(l){switch(l.label){case 0:return r=e.uri,i=r.toString(),o=e.getOffsetAt(t),[4,this._worker(r)];case 1:return[4,(a=l.sent()).getRenameInfo(i,o,{allowRenameOfImportPath:!1})];case 2:if(!1===(u=l.sent()).canRename)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(void 0!==u.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(i,o,!1,!1,!1)];case 3:if(!(c=l.sent())||e.isDisposed())return[2];for(d=[],p=0,f=c;p<f.length;p++)g=f[p],d.push({resource:s.Uri.parse(g.fileName),edit:{range:this._textSpanToRange(e,g.textSpan),text:n}});return[2,{edits:d}]}})})},t}(f)},"../node_modules/monaco-editor/esm/vs/language/typescript/lib/lib.index.js":function(e,t,n){"use strict";n.r(t),n.d(t,"libFileSet",function(){return r});var r={"lib.d.ts":!0,"lib.dom.d.ts":!0,"lib.dom.iterable.d.ts":!0,"lib.es2015.collection.d.ts":!0,"lib.es2015.core.d.ts":!0,"lib.es2015.d.ts":!0,"lib.es2015.generator.d.ts":!0,"lib.es2015.iterable.d.ts":!0,"lib.es2015.promise.d.ts":!0,"lib.es2015.proxy.d.ts":!0,"lib.es2015.reflect.d.ts":!0,"lib.es2015.symbol.d.ts":!0,"lib.es2015.symbol.wellknown.d.ts":!0,"lib.es2016.array.include.d.ts":!0,"lib.es2016.d.ts":!0,"lib.es2016.full.d.ts":!0,"lib.es2017.d.ts":!0,"lib.es2017.full.d.ts":!0,"lib.es2017.intl.d.ts":!0,"lib.es2017.object.d.ts":!0,"lib.es2017.sharedmemory.d.ts":!0,"lib.es2017.string.d.ts":!0,"lib.es2017.typedarrays.d.ts":!0,"lib.es2018.asyncgenerator.d.ts":!0,"lib.es2018.asynciterable.d.ts":!0,"lib.es2018.d.ts":!0,"lib.es2018.full.d.ts":!0,"lib.es2018.intl.d.ts":!0,"lib.es2018.promise.d.ts":!0,"lib.es2018.regexp.d.ts":!0,"lib.es2019.array.d.ts":!0,"lib.es2019.d.ts":!0,"lib.es2019.full.d.ts":!0,"lib.es2019.object.d.ts":!0,"lib.es2019.string.d.ts":!0,"lib.es2019.symbol.d.ts":!0,"lib.es2020.bigint.d.ts":!0,"lib.es2020.d.ts":!0,"lib.es2020.full.d.ts":!0,"lib.es2020.intl.d.ts":!0,"lib.es2020.promise.d.ts":!0,"lib.es2020.string.d.ts":!0,"lib.es2020.symbol.wellknown.d.ts":!0,"lib.es5.d.ts":!0,"lib.es6.d.ts":!0,"lib.esnext.d.ts":!0,"lib.esnext.full.d.ts":!0,"lib.esnext.intl.d.ts":!0,"lib.esnext.promise.d.ts":!0,"lib.esnext.string.d.ts":!0,"lib.scripthost.d.ts":!0,"lib.webworker.d.ts":!0,"lib.webworker.importscripts.d.ts":!0}},"../node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":function(e,t,n){"use strict";n.r(t),n.d(t,"setupTypeScript",function(){return u}),n.d(t,"setupJavaScript",function(){return l}),n.d(t,"getJavaScriptWorker",function(){return c}),n.d(t,"getTypeScriptWorker",function(){return d});var r,i,o=n("../node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js"),s=n("../node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js"),a=n("../node_modules/monaco-editor/esm/vs/language/typescript/fillers/monaco-editor-core.js");function u(e){i=p(e,"typescript")}function l(e){r=p(e,"javascript")}function c(){return new Promise(function(e,t){if(!r)return t("JavaScript not registered!");e(r)})}function d(){return new Promise(function(e,t){if(!i)return t("TypeScript not registered!");e(i)})}function p(e,t){var n=new o.WorkerManager(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},i=new s.LibFiles(r);return a.languages.registerCompletionItemProvider(t,new s.SuggestAdapter(r)),a.languages.registerSignatureHelpProvider(t,new s.SignatureHelpAdapter(r)),a.languages.registerHoverProvider(t,new s.QuickInfoAdapter(r)),a.languages.registerDocumentHighlightProvider(t,new s.OccurrencesAdapter(r)),a.languages.registerDefinitionProvider(t,new s.DefinitionAdapter(i,r)),a.languages.registerReferenceProvider(t,new s.ReferenceAdapter(i,r)),a.languages.registerDocumentSymbolProvider(t,new s.OutlineAdapter(r)),a.languages.registerDocumentRangeFormattingEditProvider(t,new s.FormatAdapter(r)),a.languages.registerOnTypeFormattingEditProvider(t,new s.FormatOnTypeAdapter(r)),a.languages.registerCodeActionProvider(t,new s.CodeActionAdaptor(r)),a.languages.registerRenameProvider(t,new s.RenameAdapter(r)),new s.DiagnosticsAdapter(i,e,t,r),r}},"../node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js":function(e,t,n){"use strict";n.r(t),n.d(t,"WorkerManager",function(){return s});var r=n("../node_modules/monaco-editor/esm/vs/language/typescript/fillers/monaco-editor-core.js"),i=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}u((r=r.apply(e,t||[])).next())})},o=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},s=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()}),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(function(){return n._updateExtraLibs()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return i(this,void 0,void 0,function(){var e,t;return o(this,function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}})})},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=r.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then(function(t){return e._worker?e._worker.withSyncedResources(r.editor.getModels().filter(function(t){return t.getModeId()===e._modeId}).map(function(e){return e.uri})):t})),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then(function(t){e=t}).then(function(e){if(t._worker)return t._worker.withSyncedResources(n)}).then(function(t){return e})},e}()}};