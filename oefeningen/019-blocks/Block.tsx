
export type Color<T> = "red" | "white" | "blue"

export type Props = {
    color: Color<string>;
    width: number; 
    height: number; 
 } 

 const styles = {
  rectangle: {
      width: '50px',
      height: '50px',
  }
}
export function Block({color,width,height}: Props){
   return <div style={{backgroundColor: color, width, height}}></div>
  }