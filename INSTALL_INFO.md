
# viteを使って、fluentUIをインストールする

``` powershell
PS C:\Users\kfuru> cd C:\git\test\test_node\
PS C:\git\test\test_node> npm create vite@latest test_fluent1 -- --template react
Need to install the following packages:
create-vite@6.5.0
Ok to proceed? (y) y


> npx
> create-vite test_fluent1 --template react

│
◇  Scaffolding project in C:\git\test\test_node\test_fluent1...
│
└  Done. Now run:

  cd test_fluent1
  npm install
  npm run dev

PS C:\git\test\test_node> cd .\test_fluent1\
PS C:\git\test\test_node\test_fluent1> npm install

added 154 packages, and audited 155 packages in 11s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

以下、そのまま実行すると、fluentUIが対応するReactバージョンとの依存関係がNGとなる。
fluentUIが対応するReactバージョンは少し古いことが原因。

``` powershell
PS C:\git\test\test_node\test_fluent1> npm install @fluentui/react-components
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: test_fluent1@0.0.0
npm error Found: @types/react@19.1.6
npm error node_modules/@types/react
npm error   dev @types/react@"^19.1.2" from the root project
npm error
npm error Could not resolve dependency:
npm error peer @types/react@">=16.14.0 <19.0.0" from @fluentui/react-components@9.64.1
npm error node_modules/@fluentui/react-components
npm error   @fluentui/react-components@"*" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error C:\Users\kfuru\AppData\Local\npm-cache\_logs\2025-06-08T11_10_39_847Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\kfuru\AppData\Local\npm-cache\_logs\2025-06-08T11_10_39_847Z-debug-0.log
```

そのため、--legacy-peer-depsをつけて、実行する。

```powershell
PS C:\git\test\test_node\test_fluent1> npm install @fluentui/react-components --legacy-peer-deps

added 94 packages, and audited 250 packages in 26s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\git\test\test_node\test_fluent1>
```
