import React from "react";

import ParentPC from "../TestArea/DataPtoC"
import ParentCP from "../TestArea/DataCtoP"
import CtoC  from "../TestArea/DataCtoCDice"


// Week 7 

export function Collection(){
return (<>

<p>Welkom bij de Data Passing.</p>
<CtoC />
<p>_________________________________________________</p>

<ParentPC />
<ParentCP />
</>)
}

type Props = {
    text: string;
}

export function Child({text}: Props) {
    return (<div>you passed the following: {text}</div>)
}


export default Collection;