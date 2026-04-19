import { FaGraduationCap, FaCloudUploadAlt, FaChartPie, FaTasks, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function About() {
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600 mb-4" />,
      title: "Learn Beyond Boundaries",
      description: "Access our comprehensive library of high-quality, pre-uploaded courses taught by experts in their fields."
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl text-indigo-600 mb-4" />,
      title: "Your Personal Workspace",
      description: "Don't just watch videos. Upload your own study materials, PDFs, and notes to keep all your resources centralized in one unified hub."
    },
    {
      icon: <FaChartPie className="text-4xl text-emerald-600 mb-4" />,
      title: "Track Your Progress",
      description: "Measure your success with intuitive, personalized dashboards that visually track your learning milestones and overall progress."
    },
    {
      icon: <FaTasks className="text-4xl text-amber-600 mb-4" />,
      title: "Test Your Knowledge",
      description: "Challenge yourself with built-in quiz tests. Analyze your performance data to identify your strengths and areas needing focus."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      
      <section className="bg-white py-20 px-6 sm:px-12 lg:px-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Your Ultimate <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Personal Learning</span> Ecosystem
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We believe that education shouldn't be limited to standard curriculums. Our platform is designed to give you complete control over your educational journey, acting as a central hub for platform-provided courses and your own study materials.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A platform built for real learners who want more than just video lectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-start">
              {feature.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-900 text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-sm font-semibold mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              A Glimpse into the Future:<br/> Your Personal AI Tutor
            </h2>
            <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
              We are constantly innovating to bring you the best learning experience. Soon, we'll be rolling out an advanced AI Assistant that will solve your specific questions instantly and generate 100% custom quizzes tailored to your personal data. Mastering any subject is about to get a whole lot easier.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-indigo-800 rounded-full p-12 shadow-2xl relative">
              <FaRobot className="text-8xl text-indigo-300" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 text-center bg-gray-50 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Take Control of Your Learning?</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
          Create your personalized dashboard today, upload your materials, and start tracking your success.
        </p>
        <Link to="/signup" className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
          Get Started For Free
        </Link>
      </section>

    </div>
  );
}