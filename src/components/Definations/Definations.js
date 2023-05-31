import React from 'react'
import "./Definations.css"

const Definations = ({word,meanings,category}) => {
  return (
    <div className="meanings">

      { meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}

      {  word === "" ? (<span className="subTitle">Start by typing a in search</span>) :
        (
          
          meanings.map((mean) =>
            mean.meanings.map((item)=>
              item.definitions.map((def) =>
               (

                 <div className="singleMean" style={{backgroundColor:"#fff", color:"#000"}}>
                   <b>{def.definition}</b>
                   <hr style={{backgroundColor:"#000", width:"100%"}}/>
                   
                   {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
               )

              )
            ))
        )
      }
    </div>
  );
};

export default Definations