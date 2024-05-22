export default function Login() {
  return (
    <div
      style={{ backgroundImage: 'url(/background.jpg)' }}
      className='bg-cover bg-center bg-no-repeat text-white opacity-80 '
    >
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <form className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'>
          <div className='flex flex-col items-center space-y-4'>
            <h1 className='text-3xl font-bold'>Login</h1>
            <p className='text-sm text-gray-500'>
              New to the app?{' '}
              <a href='#' className='text-red-500 hover:underline'>
                Register
              </a>
            </p>
          </div>
          <div className='mt-8 flex flex-col space-y-4'>
            <div className='flex flex-col space-y-1'>
              <label
                htmlFor='email'
                className='text-sm font-semibold text-gray-500'
              >
                email
              </label>
              <input
                type='text'
                name='email'
                placeholder='Enter your email'
                className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500'
              />
            </div>

            <div className='flex flex-col space-y-1'>
              <label
                htmlFor='password'
                className='text-sm font-semibold text-gray-500'
              >
                password
              </label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500'
              />
            </div>
          </div>
          <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
            <button
              type='submit'
              className='flex w-full items-center  justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
