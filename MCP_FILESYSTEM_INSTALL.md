# MCP Filesystem サーバー インストール記録

## 1. ディレクトリ作成
プロジェクトルートにMCPサーバー用ディレクトリを作成
```sh
mkdir mcp_filesystem
```

## 2. MCPサーバーの起動
mcp_filesystemディレクトリでFilesystem MCPサーバーをnpx経由で起動
```sh
cd mcp_filesystem
npx -y @modelcontextprotocol/server-filesystem .
```
- 許可ディレクトリ: `C:\git\test\test_node\test_fluent1\mcp_filesystem`

## 3. cline_mcp_settings.jsonの作成・編集
プロジェクトルートに以下の内容でcline_mcp_settings.jsonを作成
```json
{
  "mcpServers": {
    "github.com/modelcontextprotocol/servers/tree/main/src/filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "./mcp_filesystem"
      ],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

## 4. 動作確認用ファイルの作成
mcp_filesystemディレクトリ内にテストファイルを作成
```sh
echo MCP Filesystemサーバー動作確認用テストファイルです。 > mcp_filesystem/test.txt
```

## 5. 注意事項
- MCPサーバーがVSCode拡張機能に認識されない場合は、拡張機能やウィンドウの再読み込み、サーバーの再起動を行うこと。
