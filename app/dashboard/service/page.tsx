import type {NextPage} from 'next';

async function getServices(){
   const res=await fetch("https://jsonplaceholder.typicode.com/todos");
   return  await res.json();
}

const ProfilePage =async()=>{
    const service=await getServices();
    return (
        <div>
            <h2 className='text-4xl font-bold text-blue-500'>Services</h2>
          <div className='grid grid-cols-3 gap-4'>
            {
                service && Array.isArray(service) && service.map((service:any)=><div className='border p-5 shadow-lg rounded-lg' key={service.id}>
                <h3>{service.title}</h3>

                </div>)
            }
            </div>
            </div>
    )
}
  
export default ProfilePage;