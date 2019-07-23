import React, {FormEvent} from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  //对这个函数的定义，必须要有 event: FormEvent<HTMLInputElement> 参数
  //否则 src/containers/Hello.tsx 中最后 connect 传入的 Hello 组件会报错
  //错误信息太长，就不贴了，错误代码是：TS2345
  languageNameChange?: (event: FormEvent<HTMLInputElement>) => void;
}



function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join('!');
}

class Hello extends React.Component<Props, {}> {
  render() {
    const {name, enthusiasmLevel = 1, onIncrement, onDecrement, languageNameChange}: Props = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error('you could be a little more enthusiastic');
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
        <div>
          <input type="text" value={name} onChange={languageNameChange}/>
        </div>
      </div>
    )
  }
}

export default Hello;
