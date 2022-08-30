import logo from "./logo.svg";
import "./App.css";
import Buttonbox from "./Components/Buttonbox";
import { social, primeryskill, secoundryskill } from "./data";
import SkillIcon from "./Components/SkillIcon";

function App() {
  return (
    <div className="App">
      <div className="profileContainer">
      <img
        className="profile"
        src="https://www.niharrout.com/assets/nihar-ranjan-rout.jpg"
        alt=""
      />
      </div>
      
      <div className="headings">
        <h1 className="title">
          Hi 👋 I’m <span className="nihar">Nihar</span>
          <br />
          <span style={{ fontSize: "48px" }}>
            Web and Mobile App Developer{" "}
          </span>
        </h1>

        <p>
          Nihar Ranjan Rout is pioneer in providing Website Design, Mobile
          Application and Custom software development services to business
          .Based out in Bhubaneswar, have been working with clients all over the
          world.
        </p>

        <span style={{margin:"30px 0"}}>FIND WITH ME</span>
        <div className="socialIconBox">
          {social?.map((item) => (
            <Buttonbox key={item.id} {...item} />
          ))}
        </div>
        <div
        className="blog-whatsapp-btn"
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button style={{ color: "red" }} className="btn">
            Blog
          </button>
          <button className="btn wpbtn">Whatsapp</button>
        </div>
      </div>
      <div className="container">
        <h2>About Nihar</h2>
        <hr />
        <div>
          <p className="paragraph">
            My background includes corporate and freelance experience in the
            tech industry, with a history of Web and Mobile Application
            Development. I have worked on multiple projects across different
            business domains ranging from startups to large scale businesses.
            I’ve worked in the software industry for years with a combination of
            well-reputed local and international businesses.
          </p>
          <p className="paragraph">
            Technology excites me like magic. Creating a user-centric digital
            experience is always what I wished to create, to get the user
            attracted, engaged, and then diverted towards the business. The
            initiation of my fascinating professional career in web and app
            development always had the goal to turn the ideas into real-life
            solutions. I have always been full of enthusiasm and technology
            gives life to the enthusiastic me!
          </p>
          <p className="red-paragraph">
            Let’s shake the hands if you are looking for a techie like me to
            help you with driving an audience to your company or an application
            or website that speaks for you rather than just being available on
            the internet to be searched.
          </p>
        </div>
      </div>

      <div className="container">
        <h2>Technologies We Are Working With</h2>
        <hr />
        <p className="paragraph">PRIMARY SKILLS ON</p>
        <div className="skill-container">
          {primeryskill?.map((item, i) => (
            <SkillIcon key={i} icon={item} />
          ))}
        </div>
        <p className="paragraph">SECONDARY SKILLS ON</p>
        <div className="skill-container">
          {secoundryskill?.map((item, i) => (
            <SkillIcon key={i} icon={item} />
          ))}
        </div>
      </div>

      <div className="container">
        <h2>Web Developemnet</h2>
        <hr />
        <p className="paragraph">
          Full cycle Web Development services with agile methodology to build
          high performing sites & apps at low price
        </p>

        <div style={{ fontSize: "18px", color: "gray" }}>
          <div className="list-group">
            <div className="circle"></div>
            <span className="webSpan">Web Design</span>
          </div>
          <div className="list-group">
            <div className="circle"></div>
            <span className="webSpan">E-Commerce Solutions</span>
          </div>
          <div className="list-group">
            <div className="circle"></div>
            <span className="webSpan">Product Re-Engineering</span>
          </div>
          <div className="list-group">
            <div className="circle"></div>
            <span className="webSpan">CMS Development</span>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Mobile App Developemnt</h2>
        <hr />
        <p className="paragraph">
          Enterprise mobility solutions for a wide range of industries
          specializing in both native and hybrid apps
        </p>

        <div style={{ fontSize: "18px", color: "gray" }}>
          <div className="list-group">
            <div className="circle"></div>
            <span className="webSpan">Android App Development </span>
          </div>
          <div className="list-group">
            <div className="circle"></div>
            <span className="webSpan">Cross platform App Development</span>
          </div>
          <div className="list-group">
            <div className="circle"></div>
            <span className="webSpan">Custom Mobile App</span>
          </div>
          <div className="list-group">
            <div className="circle"></div>
            <span className="webSpan">Wearable App Development</span>
          </div>
        </div>
      </div>

      <div style={{ margin: "30px 0px" }}>
        <p
          className="red-paragraph"
          style={{ fontWeight: 400, fontSize: "16px" }}
        >
          WHY YOU SHOULD CHOOSE NIHAR AS YOUR NEXT WEB OR MOBILE APPLICATION
          DEVELOPMENT PARTNER
        </p>
        <h2 style={{ fontSize: "30px" }}>Why Nihar</h2>

        <h3 style={{ fontWeight: 700 }}>
          Knowledge about the different industry sectors:
        </h3>
        <div className="checked">
          <i class="fa-solid fa-check"></i>
          <p>
            You don’t have to worry about the lost human touch and emotions. The
            depth of knowledge and experience that I have gained while working
            in different sectors is something that I have for you in stock to
            surprise with.
          </p>
        </div>
        <h3 style={{ fontWeight: 700 }}>Years of experience & expertise:</h3>
        <div className="checked">
          <i class="fa-solid fa-check"></i>
          <p>
            They say: age is just a number, what I believe is they said it
            right. As my years of experience is way more than what I carry on my
            certificates. The expertise and experience are reflected in my work.
          </p>
        </div>

        <h3 style={{ fontWeight: 700 }}>
          To not just have a professional, working human-robot:
        </h3>
        <div className="checked">
          <i class="fa-solid fa-check"></i>
          <p>
            I believe in adding value than just nodding to the provided
            information. You would literally have a human working for you with a
            heart that would try its best to help you with the best, honestly.
          </p>
        </div>

        <h3 style={{ fontWeight: 700 }}>Value for money:</h3>
        <div className="checked">
          <i class="fa-solid fa-check"></i>
          <p>
            What you pay for, you get more than that. I don’t believe in
            extracting just your hard-earned money of yours. The best solution
            for your requirement is what I would suggest to you, even if it
            doesn't sound soothing to your ears, it assuredly would be
            beneficial for your business.
          </p>
        </div>

        <h3 style={{ fontWeight: 700 }}>Happy mates:</h3>
        <div className="checked">
          <i class="fa-solid fa-check"></i>
          <p>
            My happy mates have stories and experiences to share. They were once
            my client and now we have a relationship built out of trust and
            satisfaction. In the years that I have dedicated to this profession,
            I have built relations rather than a mere business world.
          </p>
        </div>

        <h3 style={{ fontWeight: 700 }}>
          Someone to understand what your heart wants:
        </h3>
        <div className="checked">
          <i class="fa-solid fa-check"></i>
          <p>
            Business is not just about the service, you initiated it with some
            emotions attached, and growing your business means enhancing love
            for what your heart justifies. I understand what is best for your
            business in technical aspects. I am someone who is working on his
            passion, there won’t be someone who can understand your emotions
            better than me.
          </p>
        </div>
      </div>
      <a href=".wpbtn" style={{ scrollBehavior: "smooth" }}>
        <button style={{ color: "red" }} className="btn">
          Whatsapp
        </button>
      </a>
      <hr style={{ marginTop: "0px" }} />

      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <p className="paragraph" style={{ fontSize: "20px", margin: "50px 0" }}>
          I develop custom mobile apps to meet the requirements of your business
          and drive growth. Our full-stack development
          <br />
          service has you covered from design to development, to launch, and
          beyond.
        </p>
        <p className="paragraph">
          © 2021-2022. All rights reserved by niharrout.com Changelog (v 4.5)
        </p>
      </div>
    </div>
  );
}

export default App;
