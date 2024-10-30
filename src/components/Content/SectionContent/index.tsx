interface Props {
  Content: {title: string}
  IsLoading: boolean
  children: any
}

export const SectionContent = ({ Content, IsLoading, children }: Props) => {
  
  return (
    <>
      {(IsLoading) && <h1>Loading...</h1>}
            
      {!IsLoading &&
        <div style={{padding: '0 2rem'}}>
          <h1 style={{textAlign: 'left'}}>{Content.title}</h1>
          <section className='cardContainer grid'>
              {children}
          </section>
        </div>
      }
    </>
  )
}