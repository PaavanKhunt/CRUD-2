// import "./App.css";
// import React from "react";

// import Home from "./component/Home";
// import Navbar from "./component/Navbar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<SignUp />} />
//         <Route path="/Signin" element={<SignIn />} />
//         <Route path="/Home" element={<Home />} />

//         <Route path="/About" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// Import React
import React from 'react';

// Import from react-router-dom
import Home from './components/modules/Home';

// Import other React Component
// import CreateStudent from "./Components/create-student.component";
// import EditStudent from "./Components/edit-student.component";
// import StudentList from "./Components/student-list.component";
// import About from "./Components/About";
// import SignIn from "./Components/Signin";
// import SignUp from "./Components/Signup";
// import Navbar from "./Components/Navbar";

// App Component
const App = () => {
  return (
    // <BrowserRouter>
    <div className="App">
      {/* <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<SignUp />} />
                  <Route path="/Signin" element={<SignIn />} />
                  <Route
                    exact
                    path="/CreateStudent"
                    element={<CreateStudent />}
                  />
                  <Route path="/create-student" element={<CreateStudent />} />
                  <Route path="/edit-student/:id" element={<EditStudent />} />
                  <Route path="/student-list" element={<StudentList />} />
                  <Route path="/About" element={<About />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container> */}
      <Home />
    </div>
    // </BrowserRouter>
  );
};

export default App;
