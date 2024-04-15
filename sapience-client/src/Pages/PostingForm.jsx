import React, {useState} from 'react'
import { useForm,useFieldArray, Controller } from 'react-hook-form';
import CreateableSelect from "react-select/creatable"

const PostingForm = () => {
    const [selectedInterest, setSelectedInterest] =useState(null);
    const [selectedPersonality, setSelectedPersonality] =useState(null);
    const [selectedVenue, setSelectedVenue] =useState(null);
    const { register, handleSubmit, reset, control, formState: { errors } } = useForm({
        defaultValues: {
            interests: [],
            personality: [],
            venuePreference: [],
            scheduleAvailability: [{ day: "", time: "" }]
        }
    });
    
    const { fields, update } = useFieldArray({
        control,
        name: "scheduleAvailability"
    });
    const refreshField = index => {
        update(index, { day: "", time: "" }); // Resets the specific field to empty values
    };

  
    const onSubmit = data => {
        data.interests = selectedInterest.map(option => option.value);
        data.personality = selectedPersonality.map(option => option.value);
        data.venuePreference = selectedVenue.map(option => option.value);
        
        fetch("http://localhost:3000/post-studymatepost", {
            method:"POST",
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(data)
        }).then(res=>res.json())
        .then((result)=>{
            console.log(result);
            if(result.acknowledged ===true){
                alert("suucessful!!!")


            }
            reset()
        })
        console.log(data);
        // Here you would typically send the data to the server via an API call
    };
    const interestOptions=[
        { value: "Film Direction", label: "Film Direction" },
        { value: "C++", label: "C++" },
        { value: "Medical", label: "Medical" },
        { value: "Web Development", label: "Web Development" },
        { value: "Quantum Computing", label: "Quantum Computing" },
        { value: "Graphic Design", label: "Graphic Design" },
        { value: "Astrophysics", label: "Astrophysics" },
        { value: "Environmental Science", label: "Environmental Science" },
        { value: "Robotics", label: "Robotics" },
        { value: "Public Speaking", label: "Public Speaking" },
        { value: "Data Science", label: "Data Science" },
        { value: "Artificial Intelligence", label: "Artificial Intelligence" },
        { value: "Philosophy", label: "Philosophy" },
        { value: "Economics", label: "Economics" },
        { value: "Literature", label: "Literature" },
        { value: "Entrepreneurship", label: "Entrepreneurship" },
        { value: "Blockchain", label: "Blockchain" },
        { value: "Cybersecurity", label: "Cybersecurity" }
    ];
    const personalityOptions = [
        { value: "Analytical", label: "Analytical" },
        { value: "Outgoing", label: "Outgoing" },
        { value: "Detail-oriented", label: "Detail-oriented" },
        { value: "Innovative", label: "Innovative" },
        { value: "Pragmatic", label: "Pragmatic" },
        { value: "Empathetic", label: "Empathetic" },
        { value: "Logical", label: "Logical" },
        { value: "Creative", label: "Creative" },
        { value: "Methodical", label: "Methodical" },
        { value: "Intuitive", label: "Intuitive" }
    ];
    
    const venueOptions = [
        { value: "University Library", label: "University Library" },
        { value: "Quiet Cafes", label: "Quiet Cafes" },
        { value: "Tech Hubs", label: "Tech Hubs" },
        { value: "Study Rooms", label: "Study Rooms" },
        { value: "Parks", label: "Parks" },
        { value: "Home Study", label: "Home Study" },
        { value: "Co-working Spaces", label: "Co-working Spaces" },
        { value: "Online Virtual Meetings", label: "Online Virtual Meetings" }
    ];
    

    
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <h2 className="text-3xl font-bold mb-4 py-2">Create New StudyMate Posting</h2>
            <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
               
               {/* 1st row */}
               <div className='flex flex-col lg:flex-row items-center justify-between gap-8'> 
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Your Name</label>
                        <input {...register("name", { required: true })} placeholder="Your Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-300"/>
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Post Title</label>
                        <input {...register("title", { required: true })} placeholder="Ex: Cybersecurity project partner" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-300"/>
                        {errors.title && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>
                {/* 2nd row */}
               <div className='flex flex-col lg:flex-row items-center justify-between gap-8'> 
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Course Work/ Branch of Study/ Field</label>
                        <input {...register("course", { required: true })} placeholder="Ex: Information Technology" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-300"/>
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>College/School/Company Name</label>
                        <input {...register("college", { required: true })} placeholder="Ex: IIIT, Allahabad" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-300"/>
                        {errors.title && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>
                {/* 3rd row */}
               <div className='flex flex-col lg:flex-row items-center justify-between gap-8'> 
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Destination</label>
                        <input {...register("destination", { required: true })} placeholder="ex: Library ,Cafes etc" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-300"/>
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Location</label>
                        <input {...register("location", { required: true })} placeholder="Ex: Seattle" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-300"/>
                        {errors.title && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>

                {/* 4th row */}
                
               <div className='flex flex-col lg:flex-row items-center justify-between gap-8'> 
                    <div className='lg:w-1/2 w-full'>
                        <span className="block mb-2 textlg">Schedule Availability:</span>
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex gap-2 mb-2">
                                <select {...register(`scheduleAvailability.${index}.day`) } className="border px-2 py-1">
                                    <option value="">Select Day</option>
                                    <option value="weekdays">Weekdays</option>
                                    <option value="weekends">Weekends</option>
                                </select>
                                <select {...register(`scheduleAvailability.${index}.time`)} className="border px-2 py-1">
                                    <option value="">Select Time</option>
                                    <option value="Morning">Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Evening">Evening</option>
                                    <option value="Late Night">Late Night</option>
                                    <option value="Full-day">Any Time</option>
                                </select>
                                <button type="button" onClick={() => refreshField(index)} className="bg-yellow-500 text-white px-4 py-1 rounded">Refresh</button>
                            </div>
                        ))}
                        <button type="button" onClick={() => update(fields.length, { day: "", time: "" })} className="bg-blue-500 text-white px-4 py-1 rounded">Add Schedule</button>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <span className="">Gender:</span>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center space-x-2">
                                <input type="radio" value="Male" {...register("gender")} className="accent-blue-500"/>
                                <span>Male</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" value="Female" {...register("gender")} className="accent-blue-500"/>
                                <span>Female</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" value="Other" {...register("gender")} className="accent-blue-500"/>
                                <span>Non-binary</span>
                            </label>   
                        </div>
                    </div>
                </div>
                {/* 5thst row */}
               <div className='flex flex-col lg:flex-row items-center justify-between gap-8'> 
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Posting Date</label>
                        <input type="date"  {...register("postingDate", { valueAsDate: true })} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-300"/>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Venue Preferences</label>
                        <CreateableSelect
                        defaultValue={selectedVenue}
                        onChange={setSelectedVenue}
                        options={venueOptions}
                        isMulti
                        className='create-job-input py-4'
                        />
                    </div>
                </div>

                {/* 6th row */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8'> 
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Interests</label>
                        <CreateableSelect
                        defaultValue={selectedInterest}
                        onChange={setSelectedInterest}
                        options={interestOptions}
                        isMulti
                        className='create-job-input py-4'
                        />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Personality Traits</label>
                        <CreateableSelect
                        defaultValue={selectedPersonality}
                        onChange={setSelectedPersonality}
                        options={personalityOptions}
                        isMulti
                        className='create-job-input py-4'
                        />
                    </div>
                </div>
                {/* 7th row */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8'> 
                    
                    <div className='w-full'>
                        <label className='block mb-2 textlg'>Description</label>
                        
                        <textarea className='w-full pl-3 py-4 focus:outline-none placeholder:text-gray-700'
                        row={6}
                        defaultValue={"Looking for a focused and serious study partner to prepare for finals"}
                        placeholder='Describe your StudyMate'
                        {...register("description")}/>

                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8'> 
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 textlg'>Posted By </label>
                        <input type="email"{...register("postedBy")} placeholder="myemail@gmail.coms" className="create-job-input"/>
                    </div>
                    
                </div>
                <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2  rounded-sm cursor-pointer"/>
            </form>
            </div>
        </div>
    );
}

export default PostingForm