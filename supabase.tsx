// supabase.tsx

import { createClient } from '@supabase/supabase-js';

// Supabase client setup
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
export const supabase = createClient(supabaseUrl, supabaseKey);

// Database operations for items
export const fetchItems = async () => {
    const { data, error } = await supabase
        .from('items')
        .select('*');
    if (error) throw error;
    return data;
};

export const addItem = async (item) => {
    const { data, error } = await supabase
        .from('items')
        .insert([item]);
    if (error) throw error;
    return data;
};

// Database operations for orders
export const fetchOrders = async () => {
    const { data, error } = await supabase
        .from('orders')
        .select('*');
    if (error) throw error;
    return data;
};

export const addOrder = async (order) => {
    const { data, error } = await supabase
        .from('orders')
        .insert([order]);
    if (error) throw error;
    return data;
};
