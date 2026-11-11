    // @param name - name of the skill
    // @param rating - skill rating of the skill
    //
    // Returns a bar with the skill rating and name of the skill
    export default function Skill({
        name,
        rating
    }){
        return (
            <>
                <div className='skill-bar-container'>
                    <h4 className='skill-bar-text'> {name} </h4>
                    <div className='skill-bar' />
                    {rating != null && <div className={rating}/>}
                </div>
            </>
        )
    }
