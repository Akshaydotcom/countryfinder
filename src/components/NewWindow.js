import {useState, useEffect, useRef} from 'react'
import { createPortal } from 'react-dom';
export const NewWindow = (props) => {
    const [container, setContainer] = useState(null);
    const newWindow = useRef(window);
  
    useEffect(() => {
      const div = document.createElement("div");
      setContainer(div);
    }, []);
  
    useEffect(() => {
      if (container) {
        newWindow.current = window.open(
          "",
          "",
          "width=600,height=600,left=200,top=200"
        );
        newWindow.current.document.body.appendChild(container);
        const curWindow = newWindow.current;
        return () => curWindow.close();
      }
    }, [container]);
  
    return container && createPortal(props.children, container);
  };