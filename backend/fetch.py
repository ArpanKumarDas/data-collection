from google.cloud import firestore
import pandas as pd

project_id = "anxiety-data"
db = firestore.Client(project=project_id)

collection_name = "user-details"
# collection_name = 'questionnaire1'
# collection_name = 'questionnaire2'

# Fetch documents from the collection
collection_ref = db.collection(collection_name)
documents = collection_ref.stream()

data = []

for document in documents:
    data.append(document.to_dict())

df = pd.DataFrame(data)

# Replace 'output.xlsx' with the desired Excel file name
excel_file = "output.xlsx"

# Write the DataFrame to an Excel file
df.to_excel(excel_file, index=False)

print(f"Data has been written to {excel_file}")
