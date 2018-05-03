
# Angular Issue 23662

When setting the `CompilerOptions` inside code rather than reading from `tsconfig` and `emitFlags` is omitted from the `performCompilation` call.
`ngfactories` are generated when setting `fullTemplateTypeCheck` and `skipTemplateCodegen` is both set to `true`.

This is to illustrate issue https://github.com/angular/angular/issues/23662

To view the issue:
```
npm i
npm run build
```