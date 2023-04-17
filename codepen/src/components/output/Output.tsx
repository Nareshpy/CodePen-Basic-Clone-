import './Output.css';
interface IOutoutProps {
  src: string
}
function Output(props: IOutoutProps):JSX.Element {
  return (
    <div className='output'>
      <iframe title='output' srcDoc={props.src} sandbox='allow-scripts'>
      </iframe>
    </div>
  )
}

export default Output