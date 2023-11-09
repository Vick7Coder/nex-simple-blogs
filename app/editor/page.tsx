'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import styles from '@/styles/page.module.css';
import type { ContextStore } from '@uiw/react-md-editor';
import SaveList from '@/components/SaveMd';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });
type OnChange = (value?: string, event?: React.ChangeEvent<HTMLTextAreaElement>, state?: ContextStore) => void;

export default function Home() {
    const [value, setValue] = React.useState('**Write anything!!!**');

    const onChange = React.useCallback<OnChange>((val) => {
        setValue(val || '');
    }, []);

    return (
        <div className={styles.main}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <MDEditor  value={value} onChange={onChange} />
                <SaveList list={value.split('\n')} />
            </div>
        </div>
    );
}