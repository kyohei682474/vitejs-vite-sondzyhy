export const HeaderOnly = (props) => {  
  const { children } = props;
return (
  <> 
  <div style={{ height: "50", backgroundColor: "red" }} >ヘッダー</div>
  {children}
   </>

)
}