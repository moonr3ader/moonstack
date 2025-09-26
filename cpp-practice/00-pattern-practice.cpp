#include<bits/stdc++.h>
using namespace std;

void print1(int n){
    for(int i = 0;i<n;i++){
        for(int j=0;j<n;j++){
            cout << "* ";
        }
        cout<< endl;
    }
}

// in java: class Main{ public static void main(String[] args) { ...code here...}}
int main(){
    int t;
    cin >> t;
    for(int i = 0; i<t;i++){
        int n;
        cin >> n;
        print1(n);
    }
}