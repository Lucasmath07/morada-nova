export interface H2Props extends React.ComponentProps<"h2"> {
  containerClassName?: string;
}


export function SectionTitle({className, children}:H2Props,){
  return(
    <h2 className={`${className} text-brand text-3xl font-bold`}>
      {children}
    </h2>
  )
}