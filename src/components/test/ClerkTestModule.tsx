import React from 'react';
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs';


function ClerkTestModule() {

    return (
        <section className='flex flex-col gap-2 w-1/2 justify-center items-center bg-slate-800 p-4 my-8 rounded-xl'>

            <article className='flex flex-col items-center gap-y-4'>
                <SignedOut>
                    <h2 className='text-2xl'>Guest</h2>
                    <SignUpButton>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Sign Up
                        </button>
                    </SignUpButton>
                </SignedOut>
            </article>

            <article className='flex flex-col items-center gap-y-4'>
                <SignedIn>
                    <h2 className='text-2xl'>Signed in</h2>
                    <SignOutButton>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            Sign Out
                        </button>
                    </SignOutButton>
                </SignedIn>
            </article>

        </section>
    )
}

export default ClerkTestModule;