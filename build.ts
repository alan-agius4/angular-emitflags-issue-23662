import { performCompilation } from '@angular/compiler-cli';
import * as ts from 'typescript';
import * as path from 'path';

const compilation = performCompilation({
	rootNames: [path.resolve('./src/public_api.ts')],
	options: {
		baseUrl: '.',
		basePath: '.',
		emitDecoratorMetadata: true,
		experimentalDecorators: true,
		moduleResolution: ts.ModuleResolutionKind.NodeJs,
		module: ts.ModuleKind.ES2015,
		target: ts.ScriptTarget.ES2015,
		outDir: './dist',
		declaration: true,
		skipLibCheck: true,
		noEmitOnError: false,

		// ng compiler options
		flatModuleId: 'test',
		flatModuleOutFile: 'test.js',
		skipTemplateCodegen: true,
		fullTemplateTypeCheck: true,
		strictMetadataEmit: true
	}
});

console.log(compilation.diagnostics);