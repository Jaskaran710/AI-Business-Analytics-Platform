from fastapi import FastAPI, UploadFile, File
import pandas as pd
import numpy as np

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Analytics Service Running"
    }

@app.post("/analyze")
async def analyze_file(file: UploadFile = File(...)):

    filename = file.filename.lower()

    # READ FILE

    if filename.endswith(".csv"):

        df = pd.read_csv(file.file)

    elif filename.endswith(".xlsx") or filename.endswith(".xls"):

        df = pd.read_excel(file.file)

    else:

        return {
            "error": "Unsupported file type"
        }

    # CLEAN DATA

    df = df.drop_duplicates()

    df.columns = df.columns.str.strip()

    df = df.replace([np.inf, -np.inf], np.nan)

    df = df.fillna(0)

    missing_values = int(df.isnull().sum().sum())

    rows = len(df)

    columns = len(df.columns)

    column_names = list(df.columns)

    # NUMERIC ANALYTICS

    numeric_columns = df.select_dtypes(include='number')

    summary_stats = numeric_columns.describe().fillna(0).to_dict()

    preview_data = df.head(5).replace(np.nan, 0).to_dict(orient="records")

    total_sales = None

    average_sales = None

    if "sales" in df.columns:

        total_sales = float(df["sales"].sum())

        average_sales = float(df["sales"].mean())

    return {
        "rows": rows,
        "columns": columns,
        "column_names": column_names,
        "missing_values": missing_values,
        "summary_statistics": summary_stats,
        "preview_data": preview_data,
        "total_sales": total_sales,
        "average_sales": average_sales
    }
