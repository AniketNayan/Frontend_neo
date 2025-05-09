import React, { useState, useEffect, useRef } from 'react';

// Reusable Password Input Component
const PasswordInput = ({ id, label, value, onChange, error, showPassword, setShowPassword, placeholder, onKeyDown, inputRef, autoComplete }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <input
        ref={inputRef}
        id={id}
        type={showPassword ? "text" : "password"}
        className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoComplete={autoComplete}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <button
        type="button"
        className="absolute right-3 top-3 text-gray-500"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
            <line x1="2" x2="22" y1="2" y2="22"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        )}
      </button>
    </div>
    {error && (
      <p id={`${id}-error`} className="mt-1 text-sm text-red-500">{error}</p>
    )}
  </div>
);

// Inline Spinner Component
const Spinner = () => (
  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
);

const AuthUI = () => {
  // Valid screens for the application
  const validScreens = ['login', 'signup', 'forgot', 'verify', 'reset'];

  // Initialize currentScreen from localStorage, default to 'login' if invalid or not found
  const [currentScreen, setCurrentScreen] = useState(() => {
    const savedScreen = localStorage.getItem('currentScreen');
    return validScreens.includes(savedScreen) ? savedScreen : 'login';
  });
  const [loginMethod, setLoginMethod] = useState('email');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  // Login form state
  const [loginCountryCode, setLoginCountryCode] = useState('');
  const [loginPhone, setLoginPhone] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  // Signup form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupCountryCode, setSignupCountryCode] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  // Forgot password state
  const [forgotEmail, setForgotEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const [resetConfirmPassword, setResetConfirmPassword] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showResetConfirmPassword, setShowResetConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  // Refs for focus management
  const loginEmailRef = useRef(null);
  const loginCountryCodeRef = useRef(null);
  const loginPhoneRef = useRef(null);
  const loginPasswordRef = useRef(null);
  const loginButtonRef = useRef(null);
  const signupFirstNameRef = useRef(null);
  const signupLastNameRef = useRef(null);
  const signupEmailRef = useRef(null);
  const signupCountryCodeRef = useRef(null);
  const signupPhoneRef = useRef(null);
  const signupPasswordRef = useRef(null);
  const signupConfirmPasswordRef = useRef(null);
  const signupTermsRef = useRef(null);
  const signupButtonRef = useRef(null);
  const forgotEmailRef = useRef(null);
  const forgotButtonRef = useRef(null);
  const verificationCodeRef = useRef(null);
  const verifyButtonRef = useRef(null);
  const resetPasswordRef = useRef(null);
  const resetConfirmPasswordRef = useRef(null);
  const resetButtonRef = useRef(null);

  // Save currentScreen to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentScreen', currentScreen);
  }, [currentScreen]);

  // Load saved credentials and reset other fields on mount
  useEffect(() => {
    const savedMethod = localStorage.getItem('loginMethod');
    const savedEmail = localStorage.getItem('loginEmail');
    const savedPhone = localStorage.getItem('loginPhone');
    const savedCountryCode = localStorage.getItem('loginCountryCode');
    
    // Reset all input fields first
    setLoginPassword('');
    setFirstName('');
    setLastName('');
    setSignupEmail('');
    setSignupCountryCode('');
    setSignupPhone('');
    setSignupPassword('');
    setConfirmPassword('');
    setAgreeTerms(false);
    setForgotEmail('');
    setVerificationCode('');
    setResetPassword('');
    setResetConfirmPassword('');
    setErrors({});
    setSuccessMessage('');

    // Then load "Remember Me" fields if they exist
    if (savedMethod) {
      setLoginMethod(savedMethod);
      setRememberMe(true);
      if (savedMethod === 'email' && savedEmail) {
        setLoginEmail(savedEmail);
      } else if (savedMethod === 'phone' && savedPhone && savedCountryCode) {
        setLoginPhone(savedPhone);
        setLoginCountryCode(savedCountryCode);
      }
    } else {
      // If no "Remember Me" data, clear login fields too
      setLoginEmail('');
      setLoginPhone('');
      setLoginCountryCode('');
      setRememberMe(false);
    }
  }, []);

  const handleScreenChange = (screen) => {
    setErrors({});
    setSuccessMessage('');
    setCurrentScreen(screen);
    setIsLoading(false);
    if (screen === 'login') {
      setLoginPassword('');
      setTimeout(() => loginEmailRef.current?.focus(), 0);
    } else if (screen === 'signup') {
      setFirstName('');
      setLastName('');
      setSignupEmail('');
      setSignupCountryCode('');
      setSignupPhone('');
      setSignupPassword('');
      setConfirmPassword('');
      setAgreeTerms(false);
      setTimeout(() => signupFirstNameRef.current?.focus(), 0);
    } else if (screen === 'forgot') {
      setForgotEmail('');
      setTimeout(() => forgotEmailRef.current?.focus(), 0);
    } else if (screen === 'verify') {
      setVerificationCode('');
      setTimeout(() => verificationCodeRef.current?.focus(), 0);
    } else if (screen === 'reset') {
      setResetPassword('');
      setResetConfirmPassword('');
      setTimeout(() => resetPasswordRef.current?.focus(), 0);
    }
  };

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePhone = (phone) => /^\d{8,15}$/.test(phone);
  const validateCountryCode = (code) => /^\d{1,4}$/.test(code);
  const validatePassword = (password) => password.length >= 8;

  const handleLogin = async () => {
    const newErrors = {};
    if (loginMethod === 'phone') {
      if (!loginCountryCode) newErrors.loginCountryCode = 'Country code is required';
      else if (!validateCountryCode(loginCountryCode)) newErrors.loginCountryCode = 'Invalid country code';
      if (!loginPhone) newErrors.loginPhone = 'Phone number is required';
      else if (!validatePhone(loginPhone)) newErrors.loginPhone = 'Invalid phone number';
    } else {
      if (!loginEmail) newErrors.loginEmail = 'Email is required';
      else if (!validateEmail(loginEmail)) newErrors.loginEmail = 'Please enter a valid email address';
    }
    if (!loginPassword) newErrors.loginPassword = 'Password is required';
    else if (!validatePassword(loginPassword)) newErrors.loginPassword = 'Password must be at least 8 characters';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockResponse = { success: true };
        if (!mockResponse.success) {
          throw new Error('Invalid credentials');
        }
        if (rememberMe) {
          localStorage.setItem('loginMethod', loginMethod);
          if (loginMethod === 'email') {
            localStorage.setItem('loginEmail', loginEmail);
            localStorage.removeItem('loginPhone');
            localStorage.removeItem('loginCountryCode');
          } else {
            localStorage.setItem('loginPhone', loginPhone);
            localStorage.setItem('loginCountryCode', loginCountryCode);
            localStorage.removeItem('loginEmail');
          }
        } else {
          localStorage.removeItem('loginMethod');
          localStorage.removeItem('loginEmail');
          localStorage.removeItem('loginPhone');
          localStorage.removeItem('loginCountryCode');
        }
        setSuccessMessage('Login successful!');
        console.log('Mock login successful');
        setTimeout(() => setSuccessMessage(''), 2000);
      } catch (error) {
        setErrors({ loginGeneral: error.message || 'Login failed' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSignup = async () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!signupEmail) newErrors.signupEmail = 'Email is required';
    else if (!validateEmail(signupEmail)) newErrors.signupEmail = 'Please enter a valid email address';
    if (!signupCountryCode) newErrors.signupCountryCode = 'Country code is required';
    else if (!validateCountryCode(signupCountryCode)) newErrors.signupCountryCode = 'Invalid country code';
    if (!signupPhone) newErrors.signupPhone = 'Phone number is required';
    else if (!validatePhone(signupPhone)) newErrors.signupPhone = 'Invalid phone number';
    if (!signupPassword) newErrors.signupPassword = 'Password is required';
    else if (!validatePassword(signupPassword)) newErrors.signupPassword = 'Password must be at least 8 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
    else if (signupPassword !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockResponse = { success: true };
        if (!mockResponse.success) {
          throw new Error('Signup failed');
        }
        setSuccessMessage('Signup successful! Redirecting to login...');
        setTimeout(() => {
          setSuccessMessage('');
          handleScreenChange('login');
        }, 2000);
      } catch (error) {
        setErrors({ signupGeneral: error.message || 'Signup failed' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleForgotPassword = async () => {
    const newErrors = {};
    if (!forgotEmail) newErrors.forgotEmail = 'Email is required';
    else if (!validateEmail(forgotEmail)) newErrors.forgotEmail = 'Please enter a valid email address';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockResponse = { success: true };
        if (!mockResponse.success) {
          throw new Error('Failed to send email');
        }
        setSuccessMessage('Verification email sent!');
        setTimeout(() => {
          setSuccessMessage('');
          handleScreenChange('verify');
        }, 2000);
      } catch (error) {
        setErrors({ forgotGeneral: error.message || 'Failed to send email' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleVerifyCode = async () => {
    const newErrors = {};
    if (!verificationCode) newErrors.verificationCode = 'Verification code is required';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (verificationCode !== '123456') {
          throw new Error('Invalid verification code');
        }
        setSuccessMessage('Code verified!');
        setTimeout(() => {
          setSuccessMessage('');
          handleScreenChange('reset');
        }, 2000);
      } catch (error) {
        setErrors({ verifyGeneral: error.message || 'Verification failed' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleResetPassword = async () => {
    const newErrors = {};
    if (!resetPassword) newErrors.resetPassword = 'Password is required';
    else if (!validatePassword(resetPassword)) newErrors.resetPassword = 'Password must be at least 8 characters';
    if (!resetConfirmPassword) newErrors.resetConfirmPassword = 'Confirm password is required';
    else if (resetPassword !== resetConfirmPassword) newErrors.resetConfirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockResponse = { success: true };
        if (!mockResponse.success) {
          throw new Error('Password reset failed');
        }
        setSuccessMessage('Password reset successful! Redirecting to login...');
        setTimeout(() => {
          setSuccessMessage('');
          handleScreenChange('login');
        }, 2000);
      } catch (error) {
        setErrors({ resetGeneral: error.message || 'Password reset failed' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockResponse = { success: true };
      if (!mockResponse.success) {
        throw new Error('Failed to resend code');
      }
      setSuccessMessage('Verification code resent!');
      setTimeout(() => setSuccessMessage(''), 2000);
    } catch (error) {
      setErrors({ verifyGeneral: error.message || 'Failed to resend code' });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press for input navigation
  const handleEnterKey = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (nextRef.current) {
        nextRef.current.focus();
      }
    }
  };

  const nextSlide = () => setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const brandName = "Neomarche";
  const slidesContent = [
    { image: '/images/shoe1.png', title: 'Stunning Stores For Your Brand' },
    { image: '/images/shoe2.png', title: 'Seamless User Experience' },
    { image: '/images/fas1.png', title: 'Seamless Buying Experience' }
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">
      <div className="w-full md:w-1/2 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        <div className="p-6 md:p-12">
          <div className="mb-8">
            <div className="flex items-center">
              <div className="text-indigo-600 mr-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6ZM16 24C11.582 24 8 20.418 8 16C8 11.582 11.582 8 16 8C20.418 8 24 11.582 24 16C24 20.418 20.418 24 16 24Z" fill="#4F46E5" />
                  <path d="M16 12C13.791 12 12 13.791 12 16C12 18.209 13.791 20 16 20C18.209 20 20 18.209 20 16C20 13.791 18.209 12 16 12Z" fill="#4F46E5" />
                  <path d="M16 0C12.318 0 9.318 2.95 9.318 6.591C9.318 7.141 9.768 7.591 10.318 7.591C10.868 7.591 11.318 7.141 11.318 6.591C11.318 4.054 13.409 2 16 2C18.591 2 20.682 4.054 20.682 6.591C20.682 7.141 21.132 7.591 21.682 7.591C22.232 7.591 22.682 7.141 22.682 6.591C22.682 2.95 19.682 0 16 0Z" fill="#4F46E5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{brandName}</h2>
            </div>
          </div>

          {currentScreen === 'login' && (
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-800">Login</h1>
              {successMessage && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-600">{successMessage}</p>
                </div>
              )}
              {errors.loginGeneral && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-500">{errors.loginGeneral}</p>
                </div>
              )}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Sign in with</p>
                <div className="flex space-x-4 mb-6">
                  <button 
                    type="button"
                    className={`flex-1 py-2 px-3 text-sm rounded-md border ${loginMethod === 'email' ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'border-gray-300 text-gray-700'}`}
                    onClick={() => {
                      setLoginMethod('email');
                      setLoginPhone('');
                      setLoginCountryCode('');
                      loginEmailRef.current?.focus();
                    }}
                  >
                    Email
                  </button>
                  <button 
                    type="button"
                    className={`flex-1 py-2 px-3 text-sm rounded-md border ${loginMethod === 'phone' ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'border-gray-300 text-gray-700'}`}
                    onClick={() => {
                      setLoginMethod('phone');
                      setLoginEmail('');
                      loginCountryCodeRef.current?.focus();
                    }}
                  >
                    Phone
                  </button>
                </div>
              </div>

              {loginMethod === 'phone' ? (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Phone Number</label>
                  <div className="flex space-x-2">
                    <div className="w-1/4">
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-gray-500">+</span>
                        <input
                          ref={loginCountryCodeRef}
                          id="loginCountryCode"
                          type="tel"
                          className={`w-full pl-6 pr-3 py-3 border ${errors.loginCountryCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                          placeholder="91"
                          value={loginCountryCode}
                          onChange={(e) => {
                            const value = e.target.value;
                            if ((/^\d*$/.test(value) || value === '') && value.length <= 4) {
                              setLoginCountryCode(value);
                              setErrors(prev => ({ ...prev, loginCountryCode: null, loginGeneral: null }));
                            }
                          }}
                          onKeyDown={(e) => handleEnterKey(e, loginPhoneRef)}
                          autoComplete="tel-country-code"
                          aria-describedby={errors.loginCountryCode ? 'loginCountryCode-error' : undefined}
                        />
                      </div>
                      {errors.loginCountryCode && (
                        <p id="loginCountryCode-error" className="mt-1 text-sm text-red-500">{errors.loginCountryCode}</p>
                      )}
                    </div>
                    <div className="w-3/4">
                      <input
                        ref={loginPhoneRef}
                        type="tel"
                        className={`w-full px-4 py-3 border ${errors.loginPhone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        placeholder="9876543210"
                        value={loginPhone}
                        onChange={(e) => {
                          const value = e.target.value;
                          if ((/^\d*$/.test(value) || value === '') && value.length <= 15) {
                            setLoginPhone(value);
                            setErrors(prev => ({ ...prev, loginPhone: null, loginGeneral: null }));
                          }
                        }}
                        onKeyDown={(e) => handleEnterKey(e, loginPasswordRef)}
                        autoComplete="tel-national"
                        aria-describedby={errors.loginPhone ? 'loginPhone-error' : undefined}
                      />
                      {errors.loginPhone && (
                        <p id="loginPhone-error" className="mt-1 text-sm text-red-500">{errors.loginPhone}</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                  <input
                    ref={loginEmailRef}
                    id="loginEmail"
                    type="email"
                    className={`w-full px-4 py-3 border ${errors.loginEmail ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="john.doe@gmail.com"
                    value={loginEmail}
                    onChange={(e) => {
                      setLoginEmail(e.target.value);
                      setErrors(prev => ({ ...prev, loginEmail: null, loginGeneral: null }));
                    }}
                    onKeyDown={(e) => handleEnterKey(e, loginPasswordRef)}
                    autoComplete="email"
                    aria-describedby={errors.loginEmail ? 'loginEmail-error' : undefined}
                  />
                  {errors.loginEmail && (
                    <p id="loginEmail-error" className="mt-1 text-sm text-red-500">{errors.loginEmail}</p>
                  )}
                </div>
              )}

              <PasswordInput
                id="loginPassword"
                label="Password"
                value={loginPassword}
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                  setErrors(prev => ({ ...prev, loginPassword: null, loginGeneral: null }));
                }}
                error={errors.loginPassword}
                showPassword={showLoginPassword}
                setShowPassword={setShowLoginPassword}
                placeholder="Enter your password"
                onKeyDown={(e) => handleEnterKey(e, loginButtonRef)}
                inputRef={loginPasswordRef}
                autoComplete="current-password"
              />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    checked={rememberMe}
                    onChange={(e) => {
                      setRememberMe(e.target.checked);
                      if (!e.target.checked) {
                        localStorage.removeItem('loginMethod');
                        localStorage.removeItem('loginEmail');
                        localStorage.removeItem('loginPhone');
                        localStorage.removeItem('loginCountryCode');
                      }
                    }}
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me</label>
                </div>
                <button
                  type="button"
                  onClick={() => handleScreenChange('forgot')}
                  className="text-sm text-rose-500 hover:text-rose-600"
                >
                  Forgot Password
                </button>
              </div>

              <button
                ref={loginButtonRef}
                type="button"
                className={`w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-6 flex justify-center items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : 'Login'}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => handleScreenChange('signup')}
                    className="text-rose-500 hover:text-rose-600"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          )}

          {currentScreen === 'signup' && (
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Sign up</h1>
              <p className="text-gray-600 mb-8">Let's get you all set up so you can access your personal account.</p>
              {successMessage && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-600">{successMessage}</p>
                </div>
              )}
              {errors.signupGeneral && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-500">{errors.signupGeneral}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    ref={signupFirstNameRef}
                    id="firstName"
                    type="text"
                    className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setErrors(prev => ({ ...prev, firstName: null, signupGeneral: null }));
                    }}
                    onKeyDown={(e) => handleEnterKey(e, signupLastNameRef)}
                    autoComplete="given-name"
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    ref={signupLastNameRef}
                    id="lastName"
                    type="text"
                    className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setErrors(prev => ({ ...prev, lastName: null, signupGeneral: null }));
                    }}
                    onKeyDown={(e) => handleEnterKey(e, signupEmailRef)}
                    autoComplete="family-name"
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                <input
                  ref={signupEmailRef}
                  id="signupEmail"
                  type="email"
                  className={`w-full px-4 py-3 border ${errors.signupEmail ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="john.doe@gmail.com"
                  value={signupEmail}
                  onChange={(e) => {
                    setSignupEmail(e.target.value);
                    setErrors(prev => ({ ...prev, signupEmail: null, signupGeneral: null }));
                  }}
                  onKeyDown={(e) => handleEnterKey(e, signupCountryCodeRef)}
                  autoComplete="email"
                  aria-describedby={errors.signupEmail ? 'signupEmail-error' : undefined}
                />
                {errors.signupEmail && (
                  <p id="signupEmail-error" className="mt-1 text-sm text-red-500">{errors.signupEmail}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Phone Number</label>
                <div className="flex space-x-2">
                  <div className="w-1/4">
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-gray-500">+</span>
                      <input
                        ref={signupCountryCodeRef}
                        type="tel"
                        className={`w-full pl-6 pr-3 py-3 border ${errors.signupCountryCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        placeholder="91"
                        value={signupCountryCode}
                        onChange={(e) => {
                          const value = e.target.value;
                          if ((/^\d*$/.test(value) || value === '') && value.length <= 4) {
                            setSignupCountryCode(value);
                            setErrors(prev => ({ ...prev, signupCountryCode: null, signupGeneral: null }));
                          }
                        }}
                        onKeyDown={(e) => handleEnterKey(e, signupPhoneRef)}
                        autoComplete="tel-country-code"
                        aria-describedby={errors.signupCountryCode ? 'signupCountryCode-error' : undefined}
                      />
                    </div>
                    {errors.signupCountryCode && (
                      <p id="signupCountryCode-error" className="mt-1 text-sm text-red-500">{errors.signupCountryCode}</p>
                    )}
                  </div>
                  <div className="w-3/4">
                    <input
                      ref={signupPhoneRef}
                      type="tel"
                      className={`w-full px-4 py-3 border ${errors.signupPhone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="9876543210"
                      value={signupPhone}
                      onChange={(e) => {
                        const value = e.target.value;
                        if ((/^\d*$/.test(value) || value === '') && value.length <= 15) {
                          setSignupPhone(value);
                          setErrors(prev => ({ ...prev, signupPhone: null, signupGeneral: null }));
                        }
                      }}
                      onKeyDown={(e) => handleEnterKey(e, signupPasswordRef)}
                      autoComplete="tel-national"
                      aria-describedby={errors.signupPhone ? 'signupPhone-error' : undefined}
                    />
                    {errors.signupPhone && (
                      <p id="signupPhone-error" className="mt-1 text-sm text-red-500">{errors.signupPhone}</p>
                    )}
                  </div>
                </div>
              </div>

              <PasswordInput
                id="signupPassword"
                label="Password"
                value={signupPassword}
                onChange={(e) => {
                  setSignupPassword(e.target.value);
                  setErrors(prev => ({ ...prev, signupPassword: null, signupGeneral: null }));
                }}
                error={errors.signupPassword}
                showPassword={showSignupPassword}
                setShowPassword={setShowSignupPassword}
                placeholder="Enter your password"
                onKeyDown={(e) => handleEnterKey(e, signupConfirmPasswordRef)}
                inputRef={signupPasswordRef}
                autoComplete="new-password"
              />

              <PasswordInput
                id="confirmPassword"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrors(prev => ({ ...prev, confirmPassword: null, signupGeneral: null }));
                }}
                error={errors.confirmPassword}
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
                placeholder="Confirm your password"
                onKeyDown={(e) => handleEnterKey(e, signupTermsRef)}
                inputRef={signupConfirmPasswordRef}
                autoComplete="new-password"
              />

              <div className="flex items-center mb-6">
                <input
                  ref={signupTermsRef}
                  type="checkbox"
                  id="terms"
                  className={`h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 ${errors.agreeTerms ? 'border-red-500' : ''}`}
                  checked={agreeTerms}
                  onChange={(e) => {
                    setAgreeTerms(e.target.checked);
                    setErrors(prev => ({ ...prev, agreeTerms: null, signupGeneral: null }));
                  }}
                  onKeyDown={(e) => handleEnterKey(e, signupButtonRef)}
                  aria-describedby={errors.agreeTerms ? 'terms-error' : undefined}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  I agree to all the <span className="text-rose-500">Terms</span> and <span className="text-rose-500">Privacy Policies</span>
                </label>
              </div>
              {errors.agreeTerms && (
                <p id="terms-error" className="mb-4 text-sm text-red-500">{errors.agreeTerms}</p>
              )}

              <button
                ref={signupButtonRef}
                type="button"
                className={`w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-4 flex justify-center items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleSignup}
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : 'Create account'}
              </button>

              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => handleScreenChange('login')}
                    className="text-rose-500 hover:text-rose-600"
                  >
                    Login
                  </button>
                </p>
              </div>
            </div>
          )}

          {currentScreen === 'forgot' && (
            <div className="flex-1">
              <button
                type="button"
                onClick={() => handleScreenChange('login')}
                className="flex items-center text-gray-600 mb-6 hover:text-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to login
              </button>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Forgot your password?</h1>
              <p className="text-gray-600 mb-8">Don't worry, happens to all of us. Enter your email below to recover your password</p>
              {successMessage && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-600">{successMessage}</p>
                </div>
              )}
              {errors.forgotGeneral && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-500">{errors.forgotGeneral}</p>
                </div>
              )}
              <div className="mb-8">
                <label htmlFor="forgotEmail" className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                <input
                  ref={forgotEmailRef}
                  id="forgotEmail"
                  type="email"
                  className={`w-full px-4 py-3 border ${errors.forgotEmail ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="john.doe@gmail.com"
                  value={forgotEmail}
                  onChange={(e) => {
                    setForgotEmail(e.target.value);
                    setErrors(prev => ({ ...prev, forgotEmail: null, forgotGeneral: null }));
                  }}
                  onKeyDown={(e) => handleEnterKey(e, forgotButtonRef)}
                  autoComplete="email"
                  aria-describedby={errors.forgotEmail ? 'forgotEmail-error' : undefined}
                />
                {errors.forgotEmail && (
                  <p id="forgotEmail-error" className="mt-1 text-sm text-red-500">{errors.forgotEmail}</p>
                )}
              </div>

              <button
                ref={forgotButtonRef}
                type="button"
                className={`w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex justify-center items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleForgotPassword}
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : 'Submit'}
              </button>
            </div>
          )}

          {currentScreen === 'verify' && (
            <div className="flex-1">
              <button
                type="button"
                onClick={() => handleScreenChange('login')}
                className="flex items-center text-gray-600 mb-6 hover:text-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to login
              </button>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Verify code</h1>
              <p className="text-gray-600 mb-8">An authentication code has been sent to your email.</p>
              {successMessage && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-600">{successMessage}</p>
                </div>
              )}
              {errors.verifyGeneral && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-500">{errors.verifyGeneral}</p>
                </div>
              )}
              <div className="mb-2">
                <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-1">Enter Code</label>
                <input
                  ref={verificationCodeRef}
                  id="verificationCode"
                  type="text"
                  maxLength="6"
                  className={`w-full px-4 py-3 border ${errors.verificationCode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="123456"
                  value={verificationCode}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value) || value === '') {
                      setVerificationCode(value);
                      setErrors(prev => ({ ...prev, verificationCode: null, verifyGeneral: null }));
                    }
                  }}
                  onKeyDown={(e) => handleEnterKey(e, verifyButtonRef)}
                  autoComplete="off"
                  aria-describedby={errors.verificationCode ? 'verificationCode-error' : undefined}
                />
                {errors.verificationCode && (
                  <p id="verificationCode-error" className="mt-1 text-sm text-red-500">{errors.verificationCode}</p>
                )}
              </div>

              <div className="text-right mb-8">
                <button 
                  type="button"
                  className={`text-sm text-rose-500 hover:text-rose-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handleResendCode}
                  disabled={isLoading}
                >
                  Resend
                </button>
              </div>

              <button
                ref={verifyButtonRef}
                type="button"
                className={`w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex justify-center items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleVerifyCode}
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : 'Verify'}
              </button>
            </div>
          )}

          {currentScreen === 'reset' && (
            <div className="flex-1">
              <button
                type="button"
                onClick={() => handleScreenChange('login')}
                className="flex items-center text-gray-600 mb-6 hover:text-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                Back to login
              </button>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Set a password</h1>
              <p className="text-gray-600 mb-8">Your previous password has been reset. Please set a new password for your account.</p>
              {successMessage && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-600">{successMessage}</p>
                </div>
              )}
              {errors.resetGeneral && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-500">{errors.resetGeneral}</p>
                </div>
              )}
              <PasswordInput
                id="resetPassword"
                label="Create Password"
                value={resetPassword}
                onChange={(e) => {
                  setResetPassword(e.target.value);
                  setErrors(prev => ({ ...prev, resetPassword: null, resetGeneral: null }));
                }}
                error={errors.resetPassword}
                showPassword={showResetPassword}
                setShowPassword={setShowResetPassword}
                placeholder="Create a password"
                onKeyDown={(e) => handleEnterKey(e, resetConfirmPasswordRef)}
                inputRef={resetPasswordRef}
                autoComplete="new-password"
              />

              <PasswordInput
                id="resetConfirmPassword"
                label="Re-enter Password"
                value={resetConfirmPassword}
                onChange={(e) => {
                  setResetConfirmPassword(e.target.value);
                  setErrors(prev => ({ ...prev, resetConfirmPassword: null, resetGeneral: null }));
                }}
                error={errors.resetConfirmPassword}
                showPassword={showResetConfirmPassword}
                setShowPassword={setShowResetConfirmPassword}
                placeholder="Confirm your password"
                onKeyDown={(e) => handleEnterKey(e, resetButtonRef)}
                inputRef={resetConfirmPasswordRef}
                autoComplete="new-password"
              />

              <button
                ref={resetButtonRef}
                type="button"
                className={`w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex justify-center items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleResetPassword}
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : 'Set password'}
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="hidden md:block w-full md:w-1/2 h-64 md:h-screen bg-gray-900 relative">
        <div role="tablist" className="h-full" aria-label="Promotional slides">
          {slidesContent.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col transition-opacity duration-700 ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}
              aria-hidden={activeSlide !== index}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="relative z-10 mt-auto mb-12 text-center">
                <h3 className="text-white text-2xl font-bold">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {slidesContent.map((_, index) => (
            <button
              key={index}
              className={`h-1 rounded-full transition-all ${activeSlide === index ? 'bg-indigo-600 w-6' : 'bg-gray-500 w-1'}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthUI;