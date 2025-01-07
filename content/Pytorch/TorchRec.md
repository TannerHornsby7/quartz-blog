---
github: https://github.com/pytorch/torchrec
docs: https://pytorch.org/torchrec/
---
![[Pasted image 20250107134942.png]]
*Torch provides model parallelism since optimizing memory usage is crucial when embedding tables grow*

With **Model Parallelism** we split the model into independent segments that don't need to be run on the same GPU. With **Data Parallelism** we duplicate the model and split the data workload across the duplicates. Model Parallelism optimizes memory usage and computational efficiency for large models (how) and allows parallel embedding computation in [[DLRM]] type architectures.

**Embeddings** are vectors of real numbers in a high dimensional space used to represent meaning in complex data like words, images, or users. An **embedding table** is an aggregation of multiple embeddings into one matrix. Most commonly, embedding tables are represented as a 2D matrix with dimensions (B, N).
- _B_ is the number of embeddings stored by the table
- _N_ is number of dimensions per embedding.

Pooling embeddings is just combining embeddings into a single representative, this is the main difference between the PyTorch `nn.Embedding` and `nn.EmbeddingBag`.

Below is the E2E Flow of how embeddings are used in a recsys training process:
![[Pasted image 20250107140206.png]]

forward pass we do embedding lookup and pooling, while backwards pass we do our updates


## TorchRec Concepts