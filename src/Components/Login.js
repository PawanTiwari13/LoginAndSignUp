import React, {useState} from 'react';
import './Login.css'
function Login() {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
    };

    return (
        <div>
            <div className="login-container">
                <div className='atlassian-view'>
<img  className='image' src='../../src/Images/atlassian.png'/>
                    <text className='atlassian'>
                        ATLASSIAN
                    </text>

                                    </div>

                <h2>Login to continue</h2>
                <div>
                    <input
                        type="text"
                        placeholder=" Enter Your Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div  >
                    <button className=' button' onClick={handleLogin}>Continue</button>
                </div>
                <div className='or'>
                    <text>
                        OR
                    </text>
                </div>
                <div >
                    <button className='google'>
                        Continue with Google
                    </button>
                </div>

                <div>
                    <button>
                        Continue with Microsoft
                    </button>
                </div>
                <div>
                    <button>
                        Continue with Apple
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Login;
