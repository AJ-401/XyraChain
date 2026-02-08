# chatbot/test_chat.py

from app.engine.rag_engine import get_rag_chain

print("Initializing AI-Health-Chain...")
chain = get_rag_chain()

query = "I am having stomach pain and constantly feel like visiting washroom."
response = chain.invoke({"input": query})

print("\n--- AI Response ---")
print(response["answer"])