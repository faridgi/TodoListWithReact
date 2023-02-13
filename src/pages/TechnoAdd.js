import { useState } from 'react';
export default function TechnoAdd(props) {
    const [techno, setTechno ] = useState({
        technoname: '',
        technocategory: '',
        technodescription: '',
    });
    const { handleAddTechno } = props;
    
    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTechno(techno);
        setTechno({
            technoname: '',
            technocategory: '',
            technodescription: '',
        })
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setTechno({...techno, [name]: value });
    }
    return (
        <div className="techno-add">
            <h1>Add a Techno</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="technoname">Name:</label>
                    <br />
                    <input type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(evt) => handleChange(evt)}></input>
                    <br />
                    <label htmlFor="technocategory">Category:</label>
                    <br />
                    <select name="technocategory" id="technocategor" value={techno.technocategory} onChange={(evt) => handleChange(evt)}>
                        <option value="">Add a categoy</option>
                        <option value="front">Front</option>
                        <option value="back">back</option>
                        <option value="fullstack">Full Stack</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <label htmlFor="technodescription">Description:</label>
                    <br />
                    <textarea name="technodescription" id="technodescription" cols="30" rows="10"  value={techno.technodescription} onChange={(evt) => handleChange(evt)}></textarea>
                    <br />
                    <input type="submit" className='btn' value="Add Techno" />
                </form>
            </div>

        </div>
    )
}