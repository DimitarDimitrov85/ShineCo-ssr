import React, { useCallback, useEffect, useState } from 'react'

const App = () => {
    
    const [data, setData] = useState<any>([
        {
            name: 'ivan',
            isVote: false,
            egn: 1
        },
        {
            name: 'Joro',
            isVote: false,
            egn: 2
        }
    ]);
    const [person, setPerson] = useState('')
    const [personEgn, setPersonEgn] = useState<any>(null)
    const [isDisabledVoteButton, setsDisabledVoteButton] = useState(false)

    
    const vote = useCallback(() => {
      setsDisabledVoteButton(true)
      console.log('personEgn', personEgn)
      // console.log('data', data)
      data.forEach((per: any) => { if (per.egn === Number(personEgn)) { per.isVote = true; } })
      // setData(newdata)
      console.log('data', data)
      // setData(data.forEach((per: any) => { if (per.egn === Number(personEgn)) { per.isVote = true; } }));
      const personInfo = data.find((person: any) => person.egn === Number(personEgn));
      setPerson(personInfo ? `${personInfo.name} - ${personInfo.isVote ? 'voted' : 'not voted'}` : 'no');
      // setPerson({ ...person, isVote: true });
    }, [data, personEgn]);

    const handleChange = useCallback((e: any) => {
      console.log('data', data);
        console.log('e.value', e.target.value);
        setPersonEgn(e.target.value);
        // console.log(data.find((person: any) => person.egn === Number(e.nativeEvent.data)));
        const personInfo = data.find((person: any) => person.egn === Number(e.target.value));
        setPerson(personInfo ? `${personInfo.name} - ${personInfo.isVote ? 'voted' : 'not voted'}` : 'no');
    }, [data]);

    
    
    return (
        <div >
            <input
                onBlur={handleChange}
                height={26}
            />
            <p>{person}</p>
            {/* {
                data.map((per) => per.egn === personEgn && `${person.name} - ${person.isVote ? 'гласувал' : 'негласувал'}`)
            } */}
            <div>
                <button disabled={isDisabledVoteButton} onClick={vote}>Add</button>
            </div>
        </div>
    );
};

export default App;
