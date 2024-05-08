

const DataTable = () =>{

    const {useState} = React

    const data = ["Onboarding","Google Search Console Access","Google Analytics Access","Website Access","Technical Audit","Anchor Text and Semantic Analysis","Competitor Analysis","Anchor Text / URL Mapping","Google Data Studio Report + Local Reporting Suite","Site Level Optimization","On Page Optimization", "Content Creation","Content Publishing","Premium Press Release","Authority Niche Placements","Review Management","Index Links","Video Recap"]
    
    const [datas, setDatas] = useState(data)

    const handleEdit=(index, value)=>{
        const EditedData = [...datas]
        EditedData[index]= value
        setDatas(EditedData)
    }

    const submitData = () =>{
        console.log(datas)
    }

    return (
        <>
            <div className="container">
                <div className="data-head">MONTH1</div>
                <div className="data-column">
                    {datas.map((row, index)=>(
                        <EditableCell key={index} value={row} onchange={(value)=> handleEdit(index, value)} />
                    ))}
                </div>
                <div className="button-div"><button onClick={submitData}>save</button></div>
            </div>
        </>
    )
}


const EditableCell = ({value, onchange})=>{
    return <div><input className="data-row" type="text" value={value} onChange={(e)=> onchange(e.target.value)} /></div>
}
