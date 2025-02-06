use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    if n <= 1 {
        return n;
    }
    fibonacci(n - 1) + fibonacci(n - 2)
}

#[wasm_bindgen]
pub fn is_prime(n: u32) -> bool {
    if n <= 1 {
        return false;
    }
    if n <= 3 {
        return true;
    }
    if n % 2 == 0 || n % 3 == 0 {
        return false;
    }
    let mut i = 5;
    while i * i <= n {
        if n % i == 0 || n % (i + 2) == 0 {
            return false;
        }
        i += 6;
    }
    true
}

#[wasm_bindgen]
pub fn sort_array(arr: &mut [i32]) {
    arr.sort_unstable();
}

// Add a helper function to create a typed array view
#[wasm_bindgen]
pub fn create_typed_array(length: usize) -> js_sys::Int32Array {
    js_sys::Int32Array::new_with_length(length as u32)
} 