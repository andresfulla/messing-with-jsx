import { renderer } from './src/renderer'

const Title = (props) => {
  return (<h1 class={props.class}>{ props.children }</h1>)
}

const Subtitle = (props) => <p class="subtitle">{ props.children }</p>

const element = (
  <div>
    <Title class="red">Fantastic</Title>
    <Subtitle>Cosas</Subtitle>
    <p>Cosas raras raras</p>
  </div>
)

let dom = renderer(element);

document.body.appendChild(dom)
