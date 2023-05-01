              <li className="nav-item ">
                <Link to="/admin" className="nav-link active me-4" aria-current="page" style={{ color: '#00004d' }}>
                  Admin
                </Link>
              </li>
              
              
              
              
              
import Admin from './components/Admin/Admin';
import ProjectList from './components/Admin/ProjectList';
import Events from './components/Admin/Events';
import Users from './components/Admin/Users';


        <Route path='/admin' element={<Admin />} />
        <Route path='/projectlist' element={<ProjectList />} />
        <Route path='/eventlist' element={<Events />} />
        <Route path='/userlist' element={<Users />} />              
