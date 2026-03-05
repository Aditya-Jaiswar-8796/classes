import { useState } from 'react'
import './App.css'
import Map from './components/Map'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
 import { ToastContainer, toast } from 'react-toastify';

function App() {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5e2s7k3",
      "template_iksvwjt",
      form.current,
      "sJM9kt1kQVeCLdF3C"
    )
    .then(() => {
      toast("Enquiry sent successfully!", {
      autoClose: 8000,
      customProgressBar: false,
      position: "top-right",
      type: "success",
    });
    })
    .catch(() => {
      toast("Failed to send enquiry.", {
      autoClose: 8000,
      customProgressBar: false,
      position: "top-right",
      type: "error",
    });;
    });
  };

  return (
    <div className="w-full pt-16 h-screen bg-[#F9FAFBFF]">
      <ToastContainer/>
      <div className="pt-10 relative px-20  w-full" id='home'>
        <span className='border-2 border-blue-600 font-semibold text-blue-600 px-5 py-1 mx-6 rounded-[1rem]'>Best Academy 2026</span>
        <div className="text-6xl font-bold mt-8 text-wrap w-[25rem]">Unlock Your Potential with <span className='text-blue-500'>Best Coaching Classes</span> in Andheri</div>
        <p className='px-8 py-10 text-lg font-[500] text-wrap text-slate-600/75 w-[30rem]'>Excellence in education for over 15 years. Join our expert-led sessions designed to help you ace entrance exams and academic grades.</p>
        <div className="absolute top-10 right-32 flex flex-col items-center gap-10">
          <img src="https://ei.study/wp-content/uploads/elementor/thumbs/4-1-qdcrno8zblz2tck9z8mvv0xz6in0c23ze9u49ht9gw.jpg" alt="img" className='border-8  shadow-[-7px_10px_51px_-6px_#bfc0c1] border-white w-[32rem] rounded-[2rem]' />
          <span className="btn flex gap-5">
            <button className='bg-blue-500 text-white font-semibold px-7 py-3 hover:scale-105 hover:shadow-[0px_4px_6px_0px_rgba(59,_130,_246,_0.5)] rounded-xl'>Enroll Now</button>
            <button className='border-2 border-slate-400/50 text-slate-700 font-semibold px-7 py-3 hover:scale-105 hover:shadow-[0px_4px_6px_0px_grey] rounded-xl'>View Courses</button>
          </span>
          <span className='flex gap-20 mt-1'>
            <span className='text-sm text-slate-600 font-semibold '><span className='font-bold text-black/90 text-2xl'>5000+</span><br />Students Taught </span>
            <span className='text-sm text-slate-600 font-semibold '><span className='font-bold text-black/90 text-2xl'>98.4%</span><br />Pass Rate </span>
            <span className='text-sm text-slate-600 font-semibold '><span className='font-bold text-black/90 text-2xl'>25+</span><br />Expert Faculty </span>
          </span>
        </div>
      </div>
      <div className="py-10 pt-24 px-20" id='courses'>
        <h1 className=' text-black font-bold text-3xl'>Courses Offered</h1>
        <p className='py-5  text-lg text-wrap text-slate-600 w-[42rem]'>Tailored learning programs designed to meet global academic standards and competitive exam requirements.</p>
        <hr className='w-24 h-1 bg-blue-600 ' />

        <div className='flex gap-10 flex-wrap justify-center items-center'>
          <div className='relative h-[20rem] px-5 w-[20rem] py-3 hover:border-0 border border-slate-400/30 bg-[#FFFFFFFF] hover:shadow-[0px_4px_12px_3px_#b8b9b9] rounded-lg mt-5'>
            <img src="/lucide-Atom-Outlined.svg" className='bg-slate-300/50  w-10 h-10 rounded-lg p-1 m-5' />
            <span className='font-semibold text-sm my-3 bg-slate-400/20 text-slate-900 px-5 py-1 mx-6 rounded-[1rem]'>Engineering</span>
            <h2 className='mt-3 text-xl font-bold px-5'>IIT-JEE Preparation</h2>
            <ul className="px-5 py-3 text-sm text-slate-600 list-disc">
              <li>IIT-JEE Main & Advanced</li>
              <li>Duration: 1-2 Years</li>
              <li>Subjects: Physics, Chemistry, Mathematics</li>
            </ul>
            <button className='flex items-center gap-2 mt-5 font-semibold text-sm absolute bottom-5 text-blue-600'>Learn More <img className='w-4' src="/lucide-ArrowRight-Outlined.svg" alt="" /></button>
          </div>
          <div className='relative h-[20rem] px-5 w-[20rem] py-3 hover:border-0 border border-slate-400/30 bg-[#FFFFFFFF] hover:shadow-[0px_4px_12px_3px_#b8b9b9] rounded-lg mt-5'>
            <img src="/lucide-Stethoscope-Outlined.svg" className='bg-slate-300/50  w-10 h-10 rounded-lg p-1 m-5' />
            <span className='font-semibold text-sm my-3 bg-slate-400/20 text-slate-900 px-5 py-1 mx-6 rounded-[1rem]'>Medical</span>
            <h2 className='mt-3 text-xl font-bold px-5'>NEET Preparation</h2>
            <ul className="px-5 py-3 text-sm text-slate-600 list-disc">
              <li>NEET Preparation</li>
              <li>Duration: 1-2 Years</li>
              <li>Subjects: Physics, Chemistry, Biology</li>
            </ul>
            <button className='flex items-center gap-2 mt-5 font-semibold text-sm absolute bottom-5 text-blue-600'>Learn More <img className='w-4' src="/lucide-ArrowRight-Outlined.svg" alt="" /></button>
          </div>
          <div className='relative h-[20rem] px-5 w-[20rem] py-3 hover:border-0 border border-slate-400/30 bg-[#FFFFFFFF] hover:shadow-[0px_4px_12px_3px_#b8b9b9] rounded-lg mt-5'>
            <img src="/lucide-BookOpen-Outlined.svg" className='bg-slate-300/50  w-10 h-10 rounded-lg p-1 m-5' />
            <span className='font-semibold text-sm my-3 bg-slate-400/20 text-slate-900 px-5 py-1 mx-6 rounded-[1rem]'>Foundation</span>
            <h2 className='mt-3 text-xl font-bold px-5'>Foundation Courses (Class 8–10)</h2>
            <ul className="px-5 py-3 text-sm text-slate-600 list-disc">
              <li>Foundation Program (Class 8–10)</li>
              <li>Focus: Maths & Science</li>
              <li>Goal: Build strong fundamentals</li>
            </ul>
            <button className='flex items-center gap-2 mt-5 font-semibold text-sm absolute bottom-5 text-blue-600'>Learn More <img className='w-4' src="/lucide-ArrowRight-Outlined.svg" alt="" /></button>
          </div>
          <div className='relative h-[20rem] px-5 w-[20rem] py-3 hover:border-0 border border-slate-400/30 bg-[#FFFFFFFF] hover:shadow-[0px_4px_12px_3px_#b8b9b9] rounded-lg mt-5'>
            <img src="/lucide-GraduationCap-Outlined.svg" className='bg-slate-300/50  w-10 h-10 rounded-lg p-1 m-5' />
            <span className='font-semibold text-sm my-3 bg-slate-400/20 text-slate-900 px-5 py-1 mx-6 rounded-[1rem]'>Academic</span>
            <h2 className='mt-3 text-xl font-bold px-5'>Board Exam Preparation</h2>
            <ul className="px-5 py-3 text-sm text-slate-600 list-disc">
              <li>Class 10 Board Preparation</li>
              <li>Class 12 Board Preparation</li>
            </ul>
            <button className='flex items-center gap-2 mt-5 font-semibold text-sm absolute bottom-5 text-blue-600'>Learn More <img className='w-4' src="/lucide-ArrowRight-Outlined.svg" alt="" /></button>
          </div>
          <div className='relative h-[20rem] px-5 w-[20rem] py-3 hover:border-0 border border-slate-400/30 bg-[#FFFFFFFF] hover:shadow-[0px_4px_12px_3px_#b8b9b9] rounded-lg mt-5'>
            <img src="/lucide-Zap-Outlined.svg" className='bg-slate-300/50  w-10 h-10 rounded-lg p-1 m-5' />
            <span className='font-semibold text-sm my-3 bg-slate-400/20 text-slate-900 px-5 py-1 mx-6 rounded-[1rem]'>Fast Track</span>
            <h2 className='mt-3 text-xl font-bold px-5'>Crash Courses</h2>
            <ul className="px-5 py-3 text-sm text-slate-600 list-disc">
              <li>JEE Crash Course</li>
              <li>NEET Crash Course</li>
              <li>Duration: 3–4 months</li>
            </ul>
            <button className='flex items-center gap-2 mt-5 font-semibold text-sm absolute bottom-5 text-blue-600'>Learn More <img className='w-4' src="/lucide-ArrowRight-Outlined.svg" alt="" /></button>
          </div>
        </div>
      </div>
      <div className="py-10 pt-24 px-20 flex flex-col justify-center items-center bg-[#F0F5FEFF]" id="results">
        <h1 className=' text-black font-bold text-3xl '>Our Wall of Fame</h1>
        <p className='py-5  text-lg text-wrap text-slate-600 w-[42rem]'>The success stories of our brilliant students speak louder than words.</p>
        <hr className='w-20 h-1 bg-blue-600 ' />
        <div className="overflow-x-auto w-full [&::-webkit-scrollbar]:w-0 flex  " id='carousel'>

          <div className="flex gap-10 justify-start items-center mt-10 [animation:move_30s_linear_infinite] pr-10">
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/men/35.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Rahul Sharma
                  <p className='text-sm text-slate-600/60'>IIT-JEE Advanced 2025</p></span></div>
              <p className='text-sm text-slate-600 py-5'>"The faculty here don't just teach, they mentor. The personalized attention I received for Calculus was incredible."</p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>AIR 532</span></div>
            </div>
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/women/65.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Ananya Singh
                  <p className='text-sm text-slate-600/60'>NEET 2025</p></span></div>
              <p className='text-sm text-slate-600 py-5'>
                "The comprehensive study materials and regular mock tests at Bright Future Academy were instrumental in my NEET preparation. I felt confident and well-prepared on exam day."
              </p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>AIR 397</span></div>
            </div>
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/women/25.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Priya Kapoor
                  <p className='text-sm text-slate-600/60'>NEET 2025</p></span></div>
              <p className='text-sm text-slate-600 pt-5'>
                "The personalized attention I received at Bright Future Academy was a game-changer. The teachers helped me identify my weak areas and provided targeted support, which played a crucial role in my success."
              </p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>AIR 578</span></div>
            </div>
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/women/55.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Sanya Mehta
                  <p className='text-sm text-slate-600/60'>Class 12 CBSE</p></span></div>
              <p className='text-sm text-slate-600 py-5'>
                "The focus on concepts at Bright Future Academy changed how I approach Science. I secured a wonderfull percentage in my entrance exams!"
              </p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>98.8%</span></div>
            </div>
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/men/14.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Aditya Verma
                  <p className='text-sm text-slate-600/60'>Class 10 ICSE</p></span></div>
              <p className='text-sm text-slate-600 py-5'>
                "The teachers at Bright Future Academy are amazing! They helped me improve my understanding of Science and Math, leading to a significant boost in my grades."
              </p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>99.2%</span></div>
            </div>
          </div>
          <div aria-hidden className="flex gap-10 justify-start items-center mt-10 [animation:move_30s_linear_infinite] pr-10">
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/men/35.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Rahul Sharma
                  <p className='text-sm text-slate-600/60'>IIT-JEE Advanced 2025</p></span></div>
              <p className='text-sm text-slate-600 py-5'>"The faculty here don't just teach, they mentor. The personalized attention I received for Calculus was incredible."</p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>AIR 532</span></div>
            </div>
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/women/65.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Ananya Singh
                  <p className='text-sm text-slate-600/60'>NEET 2025</p></span></div>
              <p className='text-sm text-slate-600 py-5'>
                "The comprehensive study materials and regular mock tests at Bright Future Academy were instrumental in my NEET preparation. I felt confident and well-prepared on exam day."
              </p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>AIR 397</span></div>
            </div>
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/women/25.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Priya Kapoor
                  <p className='text-sm text-slate-600/60'>NEET 2025</p></span></div>
              <p className='text-sm text-slate-600 pt-5'>
                "The personalized attention I received at Bright Future Academy was a game-changer. The teachers helped me identify my weak areas and provided targeted support, which played a crucial role in my success."
              </p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>AIR 578</span></div>
            </div>
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/women/55.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Sanya Mehta
                  <p className='text-sm text-slate-600/60'>Class 12 CBSE</p></span></div>
              <p className='text-sm text-slate-600 py-5'>
                "The focus on concepts at Bright Future Academy changed how I approach Science. I secured a wonderfull percentage in my entrance exams!"
              </p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>98.8%</span></div>
            </div>
            <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
              <div className="flex items-center relative gap-3 -left-5"><img src="https://randomuser.me/api/portraits/men/14.jpg" alt="img" className='w-14  h-14 rounded-full' />
                <span className='font-bold text-lg'>Aditya Verma
                  <p className='text-sm text-slate-600/60'>Class 10 ICSE</p></span></div>
              <p className='text-sm text-slate-600 py-5'>
                "The teachers at Bright Future Academy are amazing! They helped me improve my understanding of Science and Math, leading to a significant boost in my grades."
              </p>
              <div className="text-sm font-semibold text-slate-600 flex justify-between items-center w-full">ACHIEVED: <span className='font-bold text-white px-3 py-2 bg-green-400 rounded-[1.5rem] mx-4'>99.2%</span></div>
            </div>
          </div>

        </div>
      </div>
      <div className="py-10 pt-24 px-20 " id="faculty">
        <h1 className=' text-black font-bold text-3xl '>Meet Our Expert Faculty</h1>
        <p className='py-5  text-lg text-wrap text-slate-600 w-[42rem]'>Our faculty members are not just teachers, but mentors who are dedicated to your success.</p>
        <hr className='w-20 h-1 bg-blue-500 ' />
        <div className="flex gap-10 flex-wrap justify-center items-center mt-10">
          <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="img" className='w-14  h-14 rounded-full' />
            <span className='font-bold text-lg'>Dr. Arjun Mehta
              <p className='text-sm text-blue-500'>Physics Faculty</p></span>
            <p className='text-sm text-slate-600 py-5'>
              "With over 15 years of experience, Dr. Mehta has a knack for making complex physics concepts easy to understand. His engaging teaching style has helped countless students excel in their exams."
            </p>
          </div>
          <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="img" className='w-14  h-14 rounded-full' />
            <span className='font-bold text-lg'>Dr. Neha Kapoor
              <p className='text-sm text-blue-500'>Chemistry Faculty</p></span>
            <p className='text-sm text-slate-600 py-5'>
              "Dr. Kapoor's passion for chemistry is infectious. Her clear explanations and real-world examples make learning chemistry enjoyable and effective."
            </p>
          </div>
          <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
            <img src="https://randomuser.me/api/portraits/men/72.jpg" alt="img" className='w-14  h-14 rounded-full' />
            <span className='font-bold text-lg'>Mr. Rohan Singh
              <p className='text-sm text-blue-500'>Mathematics Faculty</p></span>
            <p className='text-sm text-slate-600 py-5'>
              "Mr. Singh's expertise in mathematics and his ability to break down complex problems into simple steps has been a game-changer for many of our students."
            </p>
          </div>
          <div className='border-2 border-slate-400/50 bg-white rounded-xl w-72 h-80 p-5 flex-[0_0_18rem] flex flex-col gap-3 justify-between items-center'>
            <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="img" className='w-14  h-14 rounded-full' />
            <span className='font-bold text-lg'>Ms. Anjali Verma
              <p className='text-sm text-blue-500'>Biology Faculty</p></span>
            <p className='text-sm text-slate-600 py-5'>
              "Ms. Verma's deep knowledge of biology and her interactive teaching methods have helped students grasp even the most challenging topics with ease."
            </p>
          </div>
        </div>

      </div>
      <div className="pt-24 pb-6 px-24 bg-[#F9FAFBFF] w-full flex gap-20 justify-center items-start" id='contact'>
        <div className="w-1/2 rounded-lg flex flex-col justify-between bg-white shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] p-10 items-center">
          <div className="">
            <h1 className=' text-black font-bold text-3xl '>Send us a Message</h1>
            <p className='py-5 text-lg text-wrap text-slate-600'>Have questions about our curriculum or fee structure? Fill out the form and our counselors will get back to you within 24 hours.</p>
            </div>
          <form action="" 
          ref={form}
        onSubmit={sendEmail}
        >
            <input name='name' type="text" placeholder='Full Name' className='w-full mb-5 px-5 py-3 border border-slate-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <input name="email"  type="email" placeholder='Email Address' className='w-full mb-5 px-5 py-3 border border-slate-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <textarea name="message"  placeholder='How can we help?' className='w-full mb-5 px-5 py-3 border border-slate-400/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none'></textarea>
            <button className='bg-blue-500 w-full text-white font-semibold px-7 py-3 hover:scale-105 hover:shadow-[0px_4px_6px_0px_rgba(59,_130,_246,_0.5)] rounded-xl'>Send Enquiry</button>  
          </form>
        </div>
        <div className="w-1/2 h-[36.5rem] gap-3 bg-white shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] p-10 rounded-lg flex flex-col justify-between items-start">
          <h1 className=' text-black font-bold text-3xl '>Visit Our Campus</h1>
          <span className='flex items-center gap-5'>
            <img src="/lucide-MapPin-Outlined.svg" className='w-10 p-2 bg-[#256AF41A] rounded-full' alt="" />
            <span className='text-black text-lg font-bold'>Main Academy Center
              <p className='text-sm text-slate-600 font-semibold'>123 Main Street, Andheri, Mumbai</p>
            </span>
          </span>
          <span className='flex items-center gap-5'>
            <img src="/lucide-Phone-Outlined.svg" className='w-10 p-2 bg-[#256AF41A] rounded-full' alt="" />
            <span className='text-black text-lg font-bold'>Call Us
              <p className='text-sm text-slate-600 font-semibold'>+44 20 7946 0123 / +44 20 7946 0456</p>
            </span>
          </span>
          <span className='flex items-center gap-5'>
            <img src="/lucide-Mail-Outlined.svg" className='w-10 p-2 bg-[#256AF41A] rounded-full' alt="" />
            <span className='text-black text-lg font-bold'>Email Us
              <p className='text-sm text-slate-600 font-semibold'>admissions@brightfuture.edu</p>
            </span>
          </span>
          <Map />
        </div>

      </div>
      <div className='flex bg-[#16181DFF] h-6 w-full z-50 items-center gap-3 py-5 px-20 justify-between  text-center text-slate-300 text-sm'>
            <p>© 2024 Bright Future Academy. All rights reserved.</p>
            <ul className='flex gap-5 ml-10'>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Settings</li>
            </ul>
        </div>
    </div>
  )
}

export default App
