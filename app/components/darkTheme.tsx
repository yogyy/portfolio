'use client'

import * as React from 'react'
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';


export default function DarkTheme() {
    const [enabled, setEnabled] = React.useState(false)
    const { theme, setTheme } = useTheme()
    const handleToggle = () => {
        setEnabled(!enabled);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <>
            <Switch
                checked={enabled}
                onChange={handleToggle}
                className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
            <div className="relative ml-4 ">
                <select
                    className="rounded-md p-1 bg-white dark:bg-gray-900"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
            </div>
        </>
    )
}
