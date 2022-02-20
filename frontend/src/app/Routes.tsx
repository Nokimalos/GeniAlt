import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Post from '../pages/Post';
import CreatePost from '../pages/CreatePost';
import Root from '../pages/Root';
import RegisterFreelancer from '../pages/RegisterFreelancer';

import { BrowserRouter, Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';
import RegisterRecruiter from '../pages/RegisterRecruiter';

const Routes = (): JSX.Element => (
    <BrowserRouter>
        <RouterRoutes>
            <Route path="/" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/freelancer" element={<RegisterFreelancer />} />
            <Route path="/register/recruiter" element={<RegisterRecruiter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/post" element={<Post />} />
        </RouterRoutes>
    </BrowserRouter>
);

export default Routes;
