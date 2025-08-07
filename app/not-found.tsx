"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, [router]);

    return (
        <></>
    );
}

export default NotFound;
