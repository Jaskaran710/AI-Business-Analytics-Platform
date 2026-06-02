import traceback
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

    try:
    filename = file.filename.lower()

    if filename.endswith(".csv"):

        df = pd.read_csv(file.file)

    elif filename.endswith(".xlsx") or filename.endswith(".xls"):

        df = pd.read_excel(file.file)

    else:

        return {
            "error": "Unsupported file type"
        }

    df = df.drop_duplicates()

    df.columns = df.columns.str.strip()

    df = df.replace([np.inf, -np.inf], np.nan)

    df = df.fillna(0)

    missing_values = int(df.isnull().sum().sum())

    rows = len(df)

    columns = len(df.columns)

    column_names = list(df.columns)

    numeric_columns = df.select_dtypes(include="number")

    summary_stats = numeric_columns.describe().fillna(0).to_dict()

    preview_data = df.head(5).replace(np.nan, 0).to_dict(orient="records")

    total_sales = None
    average_sales = None

    average_age = None
    average_wait_time = None
    average_satisfaction = None
    max_satisfaction = None
    min_satisfaction = None

    department_counts = None

    if "sales" in df.columns:

        total_sales = float(df["sales"].sum())

        average_sales = float(df["sales"].mean())

    if "Patient Age" in df.columns:

        average_age = float(
            df["Patient Age"].mean()
        )

    if "Patient Waittime" in df.columns:

        average_wait_time = float(
            df["Patient Waittime"].mean()
        )

    if "Patient Satisfaction Score" in df.columns:

        average_satisfaction = float(
            df["Patient Satisfaction Score"].mean()
        )

        max_satisfaction = float(
            df["Patient Satisfaction Score"].max()
        )

        min_satisfaction = float(
            df["Patient Satisfaction Score"].min()
        )

    if "Department Referral" in df.columns:

        department_counts = (
            df["Department Referral"]
            .value_counts()
            .to_dict()
        )

    return {
        "rows": rows,
        "columns": columns,
        "column_names": column_names,
        "missing_values": missing_values,
        "summary_statistics": summary_stats,
        "preview_data": preview_data,

        "total_sales": total_sales,
        "average_sales": average_sales,

        "average_age": average_age,
        "average_wait_time": average_wait_time,
        "average_satisfaction": average_satisfaction,
        "max_satisfaction": max_satisfaction,
        "min_satisfaction": min_satisfaction,

        "department_counts": department_counts
    }



    except Exception as e:

        print("ANALYZE ERROR:")
        traceback.print_exc()

        return {
            "error": str(e)
        }


