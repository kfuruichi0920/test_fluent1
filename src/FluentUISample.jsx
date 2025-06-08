import { Button, Checkbox, Input, Switch, Card, CardHeader, CardFooter } from "@fluentui/react-components";

function FluentUISample() {
  return (
    <div style={{ padding: 24 }}>
      <h2>FluentUI コンポーネント サンプル</h2>
      <div style={{ marginBottom: 16 }}>
        <Button appearance="primary">Primary Button</Button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Checkbox label="チェックボックス" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input placeholder="テキスト入力" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Switch label="スイッチ" />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Card>
          <CardHeader header="カードヘッダー" />
          <div style={{ padding: 8 }}>これはFluentUIのCardサンプルです。</div>
          <CardFooter>
            <Button>カード内ボタン</Button>
          </CardFooter>
        </Card>
      </div>
      <Button as="a" href="/" appearance="secondary">
        Welcomeページへ戻る
      </Button>
    </div>
  );
}

export default FluentUISample;
