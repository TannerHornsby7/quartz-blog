---
github: https://github.com/pytorch/torchrec
docs: https://pytorch.org/torchrec/
notebook: https://colab.research.google.com/drive/15NqT4Wk9quF9lkiMWTEnLtccBpD0xGhV#scrollTo=Iz_GZDp_oQ19
---
## Why not just Pytorch?

Torchrec optimizes pytorch for use on large-scale recommendation tasks. It leverages model parallelism (Figure 1) to optimize performance splitting the model and its underlying embeddings across GPUs.
![[Pasted image 20250107134942.png]]
*Figure 1: Forms of Parallelism*

## Main Components
In the end to end training loop there are 3 main components:
1. Planner: Takes in the configuration of environment and embedding tables and determines the optimal sharding strategy.
2. Sharder: Shards the model using the optimal sharding strategy derived by the planner
3. DistributedModelParallel: Provides an entry point to training the model in a distributed manner combining sharder & optimizer. ![[Pasted image 20250107140206.png]]
*Figure 2: Workflow*
## Data Types
1. **Jagged Tensor**: Special type of tensor for representing sparse matrices. Normal Tensor entries must all have the same dimensionality, but Jagged entries don't have to, instead we store values in a 1D array and then provide an array of offsets or lengths to split that array into groups. 
2. **Keyed Jagged Tensor**: uses an array of keys to label the partition created by lengths/offsets
Example:
```python
# Jagged Tensor

# User interactions:
# - User 1 interacted with 2 items
# - User 2 interacted with 3 items
# - User 3 interacted with 1 item
lengths = [2, 3, 1]
offsets = [0, 2, 5]  # Starting index of each user's interactions
values = torch.Tensor([101, 102, 201, 202, 203, 301])  # Item IDs interacted with
jt = JaggedTensor(lengths=lengths, values=values)
# OR
jt = JaggedTensor(offsets=offsets, values=values)

# Keyed Jagged Tensor

keys = ["user_features", "item_features"]
# Lengths of interactions:
# - User features: 2 users, with 2 and 3 interactions respectively
# - Item features: 2 items, with 1 and 2 interactions respectively
lengths = [2, 3, 1, 2]
values = torch.Tensor([11, 12, 21, 22, 23, 101, 102, 201])
# Create a KeyedJaggedTensor
kjt = KeyedJaggedTensor(keys=keys, lengths=lengths, values=values)
# Access the features by key
print(kjt["user_features"])
# Outputs user features
print(kjt["item_features"])
```

### Sharded Embedding Tables

### Sharded Modules

### Model Parallel Training

## Parallelization
Embedding tables are part of the model, so when we parallelize our model, we must decide a strategy for sharding our embedding tables.
![[Pasted image 20250107184351.png]]

![[Pasted image 20250107232207.png]]

## Optimizer
![[Pasted image 20250107232227.png]]

## Citations
- [TorchRec Documentation](https://pytorch.org/torchrec/)