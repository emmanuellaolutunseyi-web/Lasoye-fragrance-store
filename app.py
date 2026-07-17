import os
import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
from flask import Flask, render_template, request, redirect, url_for, flash
from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()

db_config = {
    "host": "localhost",
    "user": "root",
    "password": os.environ.get("DB_PASSWORD"),
    "database": "flask_app_db"
}

def get_db_connection():
    return mysql.connector.connect(**db_config)

app = Flask(__name__, template_folder='.')
app.secret_key = "Nuella0702"

@app.route("/account", methods=["GET", "POST"])
def account():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        confirm_password = request.form.get("confirm_password")
        
        if password != confirm_password:
            flash("Passwords do not match.")
            return render_template("account.html")
            
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id FROM tbl_user WHERE username = %s", (username,)) 
        existing_user = cursor.fetchone()
        
        if existing_user:
            flash("That username is already taken.")
            cursor.close()
            conn.close()
            return render_template("account.html")
            
        hashed_password = generate_password_hash(password)
        cursor.execute(
            "INSERT INTO tbl_user (username, password) VALUES (%s, %s)",
            (username, hashed_password)
        )
        conn.commit()
        cursor.close()
        conn.close()
        
        flash(f"Success! Username: {username}")
        return redirect(url_for("index"))
      
    return render_template("account.html")

@app.route("/") 
def index():
    return render_template("home.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, password FROM tbl_user WHERE username = %s", (username,))
        user = cursor.fetchone()
        
        if not user:
            cursor.close()
            conn.close()
            flash("The provided credentials do not match")
            return render_template("login.html")
            
        if not check_password_hash(user[1], password):
            cursor.close()
            conn.close()
            flash("The provided credentials do not match")
            return render_template("login.html")
        
        cursor.close()
        conn.close()
        flash("Welcome back!")
        return redirect(url_for("index"))
        
    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)
