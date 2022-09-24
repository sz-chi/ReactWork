export default function Header(props) {
    return (        
        <div className="center">  
          <h1 className="h1">{props.hi}</h1>
          <h2 className="h2">{props.title}</h2>  
          <p className="p">{props.slogan}</p>    
        </div>      
    )
}