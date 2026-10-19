window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
window.AIB_DATA.exams = window.AIB_DATA.exams || [];

window.AIB_DATA.domains["d1"] = {
  "id": "d1",
  "number": 1,
  "title": "AI Fundamentals and Literacy",
  "weight": 24,
  "summary": "Domain 1 tests whether you can speak the language of AI well enough to make sound business decisions: what models, training and inference are; how AI, machine learning and generative AI differ; why data type and data quality drive outcomes; and how global standards such as ISO/IEC 23053 and ISO/IEC 42001 give organizations a shared vocabulary. It then asks you to choose the right kind of solution (rules vs. AI, agents vs. simpler AI), keep it healthy (drift monitoring, shadow AI control) and get good results from generative AI (prompting, tokens and context windows, RAG and fine-tuning). Think like the exam: every question is a business scenario, and the best answer matches the problem to the simplest capability that solves it while keeping cost, risk and governance in view.",
  "objectives": [
    "Explain algorithms, models, training, inference and predictions in plain business language and recognize them in a scenario.",
    "Distinguish AI, machine learning (ML), deep learning and generative AI (GenAI), and pick the right category for a given business need.",
    "Classify data as structured or unstructured and explain which AI approaches each type enables.",
    "Describe the dimensions of data quality and connect poor data to poor AI outcomes and business risk.",
    "Explain how models learn from historical data, including labels, train/validation/test splits, overfitting and inherited bias.",
    "Identify what ISO/IEC 23053, ISO/IEC 42001 and related frameworks are for and when a strategist would reference each.",
    "Decide when rule-based automation is the better choice than AI, and when a hybrid is appropriate.",
    "Recognize AI agents by their core capabilities (autonomy, tool use, memory, agent-to-agent collaboration, orchestration) and judge when agentic AI is justified.",
    "Explain model drift and why AI systems need ongoing monitoring and retraining budgets.",
    "Design a transparent tool-classification scheme (approved, under evaluation, blocked) that reduces shadow AI risk without stifling adoption.",
    "Apply basic prompt engineering principles and recognize when the prompt, not the model, is the problem.",
    "Recognize when token limits and context window constraints are degrading GenAI results and cost.",
    "Choose between prompt engineering, Retrieval Augmented Generation (RAG) and fine-tuning for a specific business need."
  ],
  "tasks": [
    {
      "id": "1.1",
      "title": "Describe core AI concepts and define terminology.",
      "lessons": [
        {
          "id": "1.1.1",
          "skill": "Recognize and explain fundamental AI concepts in business contexts (for example, algorithms, models, training, inference, predictions).",
          "title": "Algorithms, Models, Training and Inference",
          "minutes": 12,
          "content": [
            {"type": "p", "text": "Every AI conversation in a boardroom eventually turns on five words: **algorithm**, **model**, **training**, **inference** and **prediction**. The exam does not expect you to build any of these, but it does expect you to use them precisely when you evaluate a vendor proposal, read a project status report or decide where a budget line should go. A useful mental model: the algorithm is the recipe, the data is the ingredients, training is the cooking, the model is the finished dish, and inference is serving a portion to each customer who orders."},
            {"type": "h", "text": "The five core terms"},
            {"type": "table", "headers": ["Term", "Plain-language meaning", "Business question it answers"], "rows": [
              ["Algorithm", "A step-by-step procedure that learns patterns from data (for example, a decision tree or a neural network).", "What learning method is the team using, and does it fit the problem?"],
              ["Model", "The output of training: an algorithm plus the learned parameters, ready to be used.", "What asset did we actually build, and who owns and maintains it?"],
              ["Training", "Feeding historical data to the algorithm so it adjusts its parameters to minimize error. Usually a large, periodic cost.", "How much data, time and compute will it take, and how often must we repeat it?"],
              ["Inference", "Running the trained model on new input to produce an output. Usually a small, recurring, per-request cost.", "What does each prediction cost us, and at what volume?"],
              ["Prediction (output)", "The result of inference: a classification, a number, a ranking or, for GenAI, generated content.", "How accurate is it, and what decision or action does it drive?"]
            ]},
            {"type": "p", "text": "AWS describes machine learning as finding patterns in historical data and using them to make predictions; the training step adjusts the model so it minimizes the difference between its predictions and the outcomes already known in the training data. Amazon Bedrock documentation defines **model inference** as the process of a foundation model generating an output (a response) from a given input (a prompt). Both definitions matter commercially: training is where you pay for capability, inference is where you pay for usage."},
            {"type": "h", "text": "Why the distinction drives cost and strategy"},
            {"type": "ul", "items": [
              "Training costs are front-loaded and episodic (on Amazon Bedrock, model customization is billed on tokens processed multiplied by training epochs, plus monthly model storage). Inference costs scale with every customer interaction and never stop while the system is live.",
              "A model is a depreciating asset: the world changes, so predictions degrade unless the model is monitored and retrained (see lesson 1.2.3).",
              "Predictions are probabilistic, not guaranteed. A credit model that is 92 percent accurate is still wrong on 8 of every 100 decisions, so the business process around it must handle errors.",
              "Pre-trained foundation models shift the economics: another organization paid for training, and you pay mostly for inference (per token) or for adaptation."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example: insurance claims triage", "text": "An insurer trains a model on five years of historical claims (training) using a gradient-boosted tree algorithm. The resulting model scores each new claim for fraud likelihood as it arrives (inference) and outputs a probability (prediction). Adjusters review only claims above a threshold. The training run happens quarterly; inference happens 40,000 times a day. When a vendor quotes the project, the strategist should ask separately about the one-time training cost, the recurring inference cost and the retraining cadence."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "When a scenario mentions a cost that grows with the number of customer requests, think inference. When it mentions a large one-off effort to prepare data and build capability, think training. Answers that confuse the two (for example, proposing to cut inference cost by collecting more training data) are usually distractors."},
            {"type": "scenario", "situation": "A retail chain has a working demand-forecasting model. Store managers complain that forecasts for a newly launched product line are poor, although forecasts for existing lines are fine.", "question": "Which concept best explains the problem, and what should the strategist recommend?", "answer": "The model can only infer patterns it saw during training; the new product line has no historical data, so its predictions are weak. Recommend retraining with the new data as it accumulates (or using proxy data from similar products) rather than blaming the inference pipeline. This tests whether you connect prediction quality back to training data coverage."}
          ],
          "keyTerms": [
            {"term": "Algorithm", "def": "A procedure that learns patterns from data; the method used to produce a model."},
            {"term": "Model", "def": "The trained artifact (algorithm plus learned parameters) that produces predictions from new inputs."},
            {"term": "Training", "def": "The process of adjusting a model's parameters using historical data so its predictions match known outcomes."},
            {"term": "Inference", "def": "Using a trained model to generate an output from new input; the per-request, recurring stage of AI."},
            {"term": "Prediction", "def": "The output of inference, such as a class label, a score, a forecast or generated content."},
            {"term": "Parameters", "def": "The internal values a model learns during training that determine how it interprets inputs and produces outputs."}
          ],
          "examTips": [
            "Expect vocabulary questions dressed as scenarios: a sentence describes an activity and you must name the concept (training vs. inference is the most common pair).",
            "Cost questions in Domain 2 build on this lesson: recurring, usage-based spend is inference; episodic, capability-building spend is training or customization.",
            "Remember predictions are probabilistic. Answers that promise 100 percent accurate AI outputs are wrong by definition."
          ],
          "sources": [
            {"title": "What is Machine Learning? (AWS)", "url": "https://aws.amazon.com/what-is/machine-learning/"},
            {"title": "Amazon Bedrock key terminology", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/key-definitions.html"},
            {"title": "Customize your model to improve its performance (Amazon Bedrock)", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html"}
          ]
        },
        {
          "id": "1.1.2",
          "skill": "Distinguish between AI, machine learning (ML), and generative AI (GenAI).",
          "title": "AI vs. ML vs. Generative AI",
          "minutes": 12,
          "content": [
            {"type": "p", "text": "The three terms are nested, not interchangeable. **Artificial intelligence (AI)** is the umbrella: AWS describes it as technology that enables machines to perform human-like problem-solving tasks, and notes that not all AI is machine learning. **Machine learning (ML)** is one branch of AI in which statistical models find patterns in historical data instead of following hand-written rules. **Deep learning** is a type of ML that uses many-layered neural networks. **Generative AI (GenAI)** is, in AWS wording, a very advanced form of deep learning: a subset of AI that creates new content and ideas (text, images, video, music, code) rather than only classifying or predicting."},
            {"type": "h", "text": "Side-by-side comparison"},
            {"type": "table", "headers": ["Dimension", "AI (broad)", "Traditional ML", "Generative AI"], "rows": [
              ["What it does", "Any technique that lets machines perform tasks that normally need human intelligence, including rules-based expert systems.", "Learns patterns from historical data to predict, classify, rank or detect anomalies.", "Learns the distribution of data well enough to generate new content that resembles it."],
              ["Typical output", "A decision or action.", "A label, score, number or recommendation (discriminative output).", "Text, images, code, audio, summaries, conversations."],
              ["Typical model", "Rules, search, optimization, or any ML model.", "Regression, decision trees, gradient boosting, smaller neural networks trained for one task.", "Foundation models (FMs) and large language models (LLMs) pre-trained on vast, mostly unlabeled data and reused across many tasks."],
              ["Who trains it", "Varies.", "Usually your organization, on your own labeled data.", "Usually a model provider; you adapt it with prompts, RAG or fine-tuning."],
              ["Typical business use", "Workflow automation, optimization, robotics.", "Demand forecasting, churn prediction, fraud scoring, credit risk.", "Customer-service assistants, document summarization, marketing copy, code generation."],
              ["Main risks", "Brittle rules, maintenance burden.", "Drift, bias from historical data, need for labeled data.", "Hallucination, IP and privacy exposure, token cost, prompt injection."]
            ]},
            {"type": "p", "text": "AWS makes the discriminative-versus-generative distinction explicit: traditional (discriminative) models classify data by mapping known inputs to labels, while generative models learn how features are distributed and related, so they can produce new examples. The underlying math is shared, which is why GenAI inherits every ML challenge (data quality, drift, bias) and adds new ones."},
            {"type": "h", "text": "Choosing the right category for the business problem"},
            {"type": "ol", "items": [
              "If the outcome is a yes/no, a number or a ranking, and you have historical examples, traditional ML is normally cheaper, more explainable and more accurate than a GenAI model.",
              "If the outcome is new content, a natural-language conversation, or synthesis across unstructured documents, GenAI is the fit.",
              "If the logic can be written down completely and rarely changes, you may not need ML at all (see lesson 1.2.1).",
              "Many real solutions combine them: an ML model scores a customer's churn risk and a GenAI model drafts the personalized retention offer."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example: a bank's three AI projects", "text": "A bank runs (1) a rules-based transaction-limit checker (AI in the broad sense, but not ML), (2) a credit-default predictor trained on 10 years of loan history (traditional ML, built in Amazon SageMaker AI), and (3) a customer-service assistant that answers policy questions and drafts replies (GenAI on Amazon Bedrock). Each project needs different skills, data, pricing models and governance controls. A strategist who labels all three simply as AI will misjudge cost and risk."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "The exam frequently offers a GenAI answer for a problem that is really a prediction problem (for example, forecasting inventory). The trap is novelty bias. Pick GenAI only when the scenario needs generated content or natural-language understanding across unstructured inputs."},
            {"type": "scenario", "situation": "A logistics company wants to reduce late deliveries. It has three years of GPS, weather and delivery-outcome data and wants to flag shipments at risk of delay the night before.", "question": "Which category of AI is MOST appropriate?", "answer": "Traditional (predictive) ML. The need is a risk score from structured historical data, not generated content. A GenAI assistant could later explain the flags to dispatchers, but it is not the core engine."}
          ],
          "keyTerms": [
            {"term": "Artificial intelligence (AI)", "def": "The broad field of technologies that let machines perform tasks that normally require human intelligence."},
            {"term": "Machine learning (ML)", "def": "A branch of AI in which models learn patterns from historical data rather than following explicit programmed rules."},
            {"term": "Deep learning", "def": "A type of ML that uses multi-layered neural networks; the basis of modern GenAI."},
            {"term": "Generative AI (GenAI)", "def": "A subset of deep learning that produces new content such as text, images or code, typically using foundation models."},
            {"term": "Foundation model (FM)", "def": "A very large model pre-trained on broad, mostly unlabeled data that can be adapted to many tasks; LLMs are FMs specialized for language."},
            {"term": "Discriminative vs. generative", "def": "Discriminative models map inputs to labels or values; generative models learn data distributions to create new examples."}
          ],
          "examTips": [
            "Memorize the nesting: GenAI is inside deep learning, which is inside ML, which is inside AI. Questions test whether you know rules-based systems can be AI without being ML.",
            "Match the output type to the category: label/score/number means ML; new content or conversation means GenAI.",
            "Amazon SageMaker AI is positioned for building and training your own ML models; Amazon Bedrock is positioned for using and adapting foundation models. Knowing which service goes with which category is a frequent discriminator."
          ],
          "sources": [
            {"title": "What is Artificial Intelligence? (AWS)", "url": "https://aws.amazon.com/what-is/artificial-intelligence/"},
            {"title": "What is Generative AI? (AWS)", "url": "https://aws.amazon.com/what-is/generative-ai/"},
            {"title": "What is Machine Learning? (AWS)", "url": "https://aws.amazon.com/what-is/machine-learning/"}
          ]
        },
        {
          "id": "1.1.3",
          "skill": "Distinguish between structured and unstructured data and explain the relevance of data types for AI.",
          "title": "Structured vs. Unstructured Data",
          "minutes": 10,
          "content": [
            {"type": "p", "text": "Data type is the first filter on what kind of AI is even possible. **Structured data** fits neatly into tables: each column is an attribute (date, amount, customer ID) and each row is a record. **Unstructured data** does not fit a table because of its size or nature: emails, contracts, call recordings, images, video, chat logs and free-text survey answers. AWS notes that it is typically easier to organize, clean, search and analyze structured data, which is why most pre-GenAI business analytics lived there. **Semi-structured data** (JSON files, log records, tagged XML) sits in between: it has organizing markers but no rigid schema."},
            {"type": "h", "text": "Comparison"},
            {"type": "table", "headers": ["Aspect", "Structured", "Unstructured"], "rows": [
              ["Form", "Rows and columns in databases, spreadsheets, data warehouses.", "Documents, images, audio, video, free text, web pages."],
              ["Share of enterprise data", "The smaller share, but historically the most used.", "Commonly estimated as the large majority of enterprise data, and the least exploited."],
              ["Typical AI approach", "Traditional ML: regression, classification, forecasting, anomaly detection.", "Deep learning and GenAI: natural language processing, computer vision, speech, LLMs, RAG over documents."],
              ["Preparation needed", "Cleaning, joining, feature engineering.", "Extraction (text from PDFs or audio), chunking, embedding into vectors, labeling."],
              ["Where it shines", "Precise predictions and KPIs; easy to audit.", "Summarization, search, conversation, insight from documents nobody had time to read."],
              ["AWS strategic fit", "Amazon SageMaker AI for custom predictive models; Amazon Quick for business-intelligence dashboards and natural-language questions over business data.", "Amazon Bedrock foundation models and Knowledge Bases (RAG) for documents and conversations."]
            ]},
            {"type": "h", "text": "Why it matters to a strategist"},
            {"type": "ul", "items": [
              "Opportunity sizing: GenAI unlocked value in unstructured data that was previously too expensive to analyze. If a use case targets contracts, tickets or call transcripts, you are in GenAI territory and should budget for extraction, chunking and embeddings.",
              "Feasibility: a predictive ML project needs enough clean, structured history with an outcome column. If the data lives only in PDFs, the project must first turn unstructured content into structured features, which adds cost and time.",
              "Governance: unstructured data often hides personal data (names in emails, faces in images) that structured systems have already classified. Data classification and access controls must extend to document repositories before they are connected to an AI assistant.",
              "Retrieval Augmented Generation (RAG) is the bridge: Amazon Bedrock Knowledge Bases convert unstructured documents into text, split them into chunks, create embeddings and store them in a vector index so a model can ground its answers in your content."
            ]},
            {"type": "callout", "kind": "definition", "title": "Embedding", "text": "Amazon Bedrock documentation defines embedding as transforming input into a vector of numerical values so that the similarity between different objects can be compared. Embeddings are how unstructured text and images become something a machine can search by meaning."},
            {"type": "callout", "kind": "example", "title": "Business example: a hospital network", "text": "The network has structured data (admissions, lab values, billing codes) and unstructured data (clinician notes, discharge letters, radiology images). A readmission-risk model uses the structured data (ML). A clinician assistant that summarizes a patient's notes before a consultation uses the unstructured data (GenAI with RAG). Both projects depend on the same data governance program, but their data preparation, cost model and accuracy expectations are different."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "If a scenario says the valuable information is locked in documents, emails or recordings, the correct direction is GenAI or natural language processing with RAG, not a dashboard or a regression model. If it says the data is in transaction tables with a known outcome to predict, the direction is traditional ML or BI."},
            {"type": "scenario", "situation": "A law firm wants AI to help associates find relevant clauses across 200,000 past contracts stored as PDFs.", "question": "What data type is involved and what does that imply for the solution?", "answer": "Unstructured data. The firm needs text extraction, chunking and embeddings so the documents can be searched by meaning, typically with a RAG pattern such as Amazon Bedrock Knowledge Bases. A traditional ML model on contract metadata alone would miss the clause-level content the associates need."}
          ],
          "keyTerms": [
            {"term": "Structured data", "def": "Data organized in rows and columns with a fixed schema, such as database tables and spreadsheets."},
            {"term": "Unstructured data", "def": "Data without a predefined tabular format, such as documents, emails, images, audio and video."},
            {"term": "Semi-structured data", "def": "Data with organizing tags or keys but no rigid schema, such as JSON or log files."},
            {"term": "Embedding", "def": "A numerical vector representation of text, images or other content that captures meaning so similar items can be compared."},
            {"term": "Vector index", "def": "A searchable store of embeddings used to retrieve content by semantic similarity in RAG systems."}
          ],
          "examTips": [
            "Data type is a shortcut to the right AI family: structured usually means predictive ML or BI; unstructured usually means GenAI, NLP or computer vision.",
            "Watch for feasibility traps: a predictive model cannot be trained on documents until they are converted into structured features or labels, which adds cost and time.",
            "Amazon Quick is the in-scope BI/AI assistant for questions over business data; Amazon Bedrock Knowledge Bases is the in-scope pattern for grounding GenAI in documents."
          ],
          "sources": [
            {"title": "What's the Difference Between Structured Data and Unstructured Data? (AWS)", "url": "https://aws.amazon.com/compare/the-difference-between-structured-data-and-unstructured-data/"},
            {"title": "How Amazon Bedrock knowledge bases work", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-it-works.html"},
            {"title": "Amazon Bedrock key terminology", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/key-definitions.html"}
          ]
        },
        {
          "id": "1.1.4",
          "skill": "Describe why data quality matters for AI outcomes.",
          "title": "Why Data Quality Decides AI Outcomes",
          "minutes": 11,
          "content": [
            {"type": "p", "text": "An AI model is a compression of its data. Whatever is wrong, missing, stale or skewed in the data becomes wrong, missing, stale or skewed in the predictions, except that the model states it with confidence and at scale. This is why practitioners say that most of the effort in an AI project is data work, and why the exam treats **data quality** as a business topic rather than an engineering detail. Poor data quality shows up as missed revenue (bad recommendations), direct losses (wrong credit decisions), compliance exposure (biased outcomes) and loss of trust (users stop using the tool after a few visibly wrong answers)."},
            {"type": "h", "text": "The dimensions of data quality"},
            {"type": "table", "headers": ["Dimension", "Question to ask", "AI consequence when it fails"], "rows": [
              ["Accuracy", "Do values reflect reality?", "The model learns wrong relationships; predictions are systematically off."],
              ["Completeness", "Are required fields and records present?", "Missing values bias the model toward customers or cases that happen to be well documented."],
              ["Consistency", "Does the same fact agree across systems and over time?", "Conflicting records confuse the model (one system says the customer churned, another says active)."],
              ["Timeliness (freshness)", "Is the data current enough for the decision?", "The model learns yesterday's market; RAG assistants quote superseded policies."],
              ["Uniqueness", "Are duplicates removed?", "Over-represented records distort patterns and inflate confidence."],
              ["Validity", "Do values follow the expected format and range?", "Garbage codes and out-of-range values degrade training and break pipelines."],
              ["Representativeness", "Does the data cover the populations and situations the model will face?", "Good test scores, poor real-world results; fairness problems for under-represented groups."]
            ]},
            {"type": "p", "text": "Six to twelve dimensions are commonly cited by data-management bodies; accuracy, completeness, consistency, timeliness, uniqueness and validity are the usual core. AWS Glue Data Quality, for example, implements rule types such as Completeness, IsUnique and DataFreshness that map directly onto these dimensions. For the exam you do not need to name a canonical list, but you should be able to diagnose which dimension a scenario is describing."},
            {"type": "h", "text": "Data quality for GenAI is different, not optional"},
            {"type": "ul", "items": [
              "For RAG, the quality of the knowledge base is the quality of the answers. Outdated or duplicated documents produce confident, wrong responses that look like hallucinations but are really data problems.",
              "For fine-tuning, a few hundred low-quality labeled examples will teach the model the wrong style or wrong facts far faster than a prompt would.",
              "Access and ownership are quality issues too: if nobody owns the document repository, nobody retires stale content, and the assistant drifts.",
              "Labeling quality matters: inconsistent human labels (two reviewers tag the same ticket differently) cap the accuracy any model can reach."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example: a telecom churn model", "text": "A telecom's churn model performed well in testing but lost money in production: it recommended retention discounts to customers who were never going to leave. Root cause: the 'cancellation date' field was populated inconsistently across two billing systems after a merger (a consistency failure), and the training data over-represented one region (a representativeness failure). Fixing the data pipeline, not swapping the algorithm, restored performance. The strategist's lesson: fund data remediation and ownership before funding model sophistication."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "When a scenario describes an AI system that tested well but underperforms in production, or produces answers that are out of date, the best answer usually addresses data (quality, freshness, representativeness, ownership) before it addresses the model (bigger model, more features, different vendor)."},
            {"type": "scenario", "situation": "A retailer's GenAI shopping assistant keeps recommending products that are out of stock and quoting last season's return policy.", "question": "What is the MOST likely root cause and the right first action?", "answer": "A timeliness (freshness) failure in the data the assistant retrieves. Establish ownership and an update cadence for the product catalog and policy documents feeding the knowledge base. Changing the foundation model would not fix stale source data."}
          ],
          "keyTerms": [
            {"term": "Data quality", "def": "The degree to which data is accurate, complete, consistent, timely, unique, valid and fit for its intended use."},
            {"term": "Completeness", "def": "The extent to which required data values and records are present rather than missing."},
            {"term": "Timeliness", "def": "Whether data is current enough for the decision it supports; also called freshness or currency."},
            {"term": "Representativeness", "def": "Whether the data covers the populations and situations the model will encounter in production."},
            {"term": "Labeling", "def": "Assigning the correct outcome or category to training examples so a supervised model can learn from them."},
            {"term": "Garbage in, garbage out", "def": "The principle that flawed input data produces flawed model outputs regardless of algorithm quality."}
          ],
          "examTips": [
            "Diagnose the dimension: stale answers point to timeliness; good test scores but poor production results point to representativeness or drift; conflicting records point to consistency.",
            "Data quality is a governance and ownership question on this exam, so answers that assign data owners and remediation budgets often beat purely technical fixes.",
            "For GenAI, remember that many apparent hallucinations are really knowledge-base quality problems."
          ],
          "sources": [
            {"title": "What are data quality dimensions? (IBM)", "url": "https://www.ibm.com/think/topics/data-quality-dimensions"},
            {"title": "DQDL rule type reference (AWS Glue Data Quality)", "url": "https://docs.aws.amazon.com/glue/latest/dg/dqdl-rule-types.html"},
            {"title": "What is Machine Learning? (AWS)", "url": "https://aws.amazon.com/what-is/machine-learning/"}
          ]
        },
        {
          "id": "1.1.5",
          "skill": "Explain concepts related to training an AI model by using historical data.",
          "title": "Training Models on Historical Data",
          "minutes": 13,
          "content": [
            {"type": "p", "text": "Training is how a model learns. The algorithm is shown many historical examples, compares its own guesses with the known outcomes, and adjusts its internal parameters to reduce the gap. AWS describes this as training the algorithm to minimize the difference between its predictions and the actual outcomes known in the training data. For a strategist, four ideas carry almost all of the business weight: how the model learns (the learning style), what it learns from (labels and features), how we know it works (validation and testing), and what it inherits from the past (historical bias)."},
            {"type": "h", "text": "Three learning styles"},
            {"type": "table", "headers": ["Style", "What the historical data looks like", "Typical business use", "Key constraint"], "rows": [
              ["Supervised learning", "Inputs paired with known outcomes (labels): past loans and whether they defaulted.", "Fraud detection, churn prediction, demand forecasting, document classification.", "Needs enough correctly labeled history; labeling is often the most expensive step."],
              ["Unsupervised learning", "Inputs without labels; the model finds structure on its own.", "Customer segmentation, anomaly detection, grouping similar support tickets.", "Results need human interpretation; harder to measure accuracy."],
              ["Reinforcement learning", "An environment that gives rewards for good actions over time.", "Dynamic pricing, recommendation ranking, robotics, tuning model behavior with feedback.", "Real environments change constantly, which makes it hard to apply; needs a well-defined reward."]
            ]},
            {"type": "p", "text": "AWS also describes **semi-supervised learning**, which uses a small amount of labeled data plus a large amount of unlabeled data, reducing labeling cost. Foundation models used in GenAI are pre-trained on vast unlabeled corpora and then refined with human feedback, which is why their training is something most organizations buy rather than build."},
            {"type": "h", "text": "How we know a model works: splits and overfitting"},
            {"type": "ul", "items": [
              "Historical data is split into a **training set** (to learn), a **validation set** (to tune choices) and a **test set** (held back to estimate real-world accuracy). A model judged only on data it trained on will look better than it is.",
              "**Overfitting** happens when the model memorizes noise in the training data and then fails on new data; **underfitting** happens when it is too simple to capture the pattern and performs poorly everywhere. AWS treats balancing the two as a core challenge and recommends checking performance on a separate validation set.",
              "A **baseline** (the accuracy of the current manual or rules-based process) tells you whether the model is worth deploying at all. Domain 2 builds on this when it asks for baseline metrics before measuring ROI."
            ]},
            {"type": "h", "text": "What the model inherits from history"},
            {"type": "p", "text": "A model trained on historical decisions learns historical behavior, including its mistakes and inequities. If past hiring favored one group, a model trained on those outcomes will reproduce that preference and present it as an objective score. It also assumes the future resembles the past; when the world shifts (new regulations, a pandemic, a new competitor) the learned patterns stop holding, which is the root of model drift (lesson 1.2.3). Historical data is therefore both the model's greatest asset and its main liability, and responsible AI reviews (Domain 3) start with the question: what period, population and decisions does this data represent?"},
            {"type": "callout", "kind": "example", "title": "Business example: a lender's credit model", "text": "A lender trains a supervised model on 10 years of loan outcomes. The data team holds back the most recent year as a test set to mimic real deployment, discovers the model overfits to a 2019 promotional campaign, simplifies it, and compares the result with the current manual underwriting baseline (the model approves 12 percent more good loans at the same default rate). A fairness review finds that the historical data under-represents first-time borrowers, so the team adds data from a partner and monitors outcomes by segment after launch."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "Scenario cue: a model is highly accurate on data it has seen but disappoints on new customers. The concept is overfitting (or an unrepresentative training set), and the fix is a proper validation and test split or more representative data, not a larger model."},
            {"type": "scenario", "situation": "A manufacturer wants to predict machine failures. It has five years of sensor readings but maintenance logs that record only about 40 confirmed failures.", "question": "What training challenge should the strategist flag?", "answer": "Too few labeled positive examples for reliable supervised learning. Options include unsupervised anomaly detection on the sensor data, collecting better labels going forward, or combining approaches. The project plan and timeline should reflect the labeling gap rather than promising a precise failure predictor from day one."}
          ],
          "keyTerms": [
            {"term": "Supervised learning", "def": "Training on examples whose correct outcomes (labels) are known so the model can predict outcomes for new inputs."},
            {"term": "Unsupervised learning", "def": "Training on unlabeled data to discover structure such as clusters or anomalies."},
            {"term": "Reinforcement learning", "def": "Learning by receiving rewards or penalties for actions taken toward a goal."},
            {"term": "Label", "def": "The known outcome attached to a training example, such as fraud or not fraud."},
            {"term": "Overfitting", "def": "When a model learns noise in its training data and performs poorly on new data."},
            {"term": "Training / validation / test split", "def": "Dividing historical data so the model is tuned on some data and evaluated honestly on data it has never seen."},
            {"term": "Baseline", "def": "The performance of the existing process or a simple model, used to judge whether a new model adds value."}
          ],
          "examTips": [
            "Map the data description to the learning style: labeled outcomes mean supervised; no labels and a need to group or spot unusual cases mean unsupervised; rewards over time mean reinforcement.",
            "Overfitting is the most tested training concept; the remedy is honest evaluation on held-out data and more representative data, not more complexity.",
            "Historical data carries historical bias and assumes the future resembles the past; expect this idea to connect Domain 1 to Domain 3 fairness and Domain 1 drift questions."
          ],
          "sources": [
            {"title": "What is Machine Learning? (AWS)", "url": "https://aws.amazon.com/what-is/machine-learning/"},
            {"title": "What is Generative AI? (AWS)", "url": "https://aws.amazon.com/what-is/generative-ai/"},
            {"title": "MLPERF06-BP03 Evaluate data drift (AWS Well-Architected Machine Learning Lens)", "url": "https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/mlperf06-bp03.html"}
          ]
        },
        {
          "id": "1.1.6",
          "skill": "Ensure awareness of global frameworks and unified AI vocabulary (for example, ISO/IEC 23053, ISO/IEC 42001).",
          "title": "Global AI Frameworks and Shared Vocabulary",
          "minutes": 12,
          "content": [
            {"type": "p", "text": "When a procurement team, a legal team, a data science team and a vendor all say 'AI system' and mean different things, projects stall and risks hide. International standards exist to fix that. The two the exam names are **ISO/IEC 23053**, a framework that describes how an AI system built with machine learning is put together, and **ISO/IEC 42001**, a management-system standard that tells an organization how to govern its use of AI. One describes the system; the other describes the organization around the system. Both are published by the joint ISO/IEC committee on AI (JTC 1/SC 42), alongside **ISO/IEC 22989**, which defines AI concepts and terminology."},
            {"type": "h", "text": "The standards at a glance"},
            {"type": "table", "headers": ["Framework", "What it is", "Who uses it and why", "Exam cue"], "rows": [
              ["ISO/IEC 22989:2022", "AI concepts and terminology: the shared dictionary.", "Anyone writing policies, contracts or RFPs who needs consistent definitions.", "Need a common vocabulary across teams and vendors."],
              ["ISO/IEC 23053:2022", "Framework for AI systems using ML: describes a generic ML-based AI system, its components and their functions. Applicable to organizations of all types and sizes.", "Architects, risk teams and auditors who need a consistent way to describe and compare systems.", "Describe or document how an ML system is structured; compare vendor solutions on a like-for-like basis."],
              ["ISO/IEC 42001:2023", "Requirements for an AI management system (AIMS): establishing, implementing, maintaining and continually improving AI governance across the organization. Certifiable; first edition December 2023.", "Executives, compliance and governance leads who want demonstrable, auditable AI governance.", "Need organization-wide AI governance, accountability, risk and impact assessment, or third-party assurance."],
              ["NIST AI RMF", "Voluntary US risk management framework (Govern, Map, Measure, Manage) for trustworthy AI.", "Risk and governance teams, especially in or selling to the US.", "Structure AI risk management without seeking certification."],
              ["OECD AI Principles", "Intergovernmental values-based principles for trustworthy AI adopted by many countries.", "Policy makers; organizations aligning to a widely accepted ethical baseline.", "High-level principles that regulators reference."],
              ["EU AI Act", "Binding regulation that classifies AI systems by risk tier (unacceptable, high, limited, minimal) with obligations by tier.", "Any organization placing AI on the EU market or affecting EU users.", "Legal obligations that depend on the risk classification of the use case."]
            ]},
            {"type": "h", "text": "How ISO/IEC 42001 is structured (business view)"},
            {"type": "p", "text": "Like other ISO management-system standards (ISO 9001 for quality, ISO/IEC 27001 for information security), ISO/IEC 42001 follows the harmonized structure: organizational context, leadership commitment and an AI policy, planning including AI risk assessment and AI system impact assessment, support and resources, operational controls across the AI lifecycle, performance evaluation, and continual improvement. Annexes supply AI-specific control objectives covering areas such as fairness, transparency, data quality and oversight of third-party AI suppliers. Because the structure is shared, organizations already certified to 27001 can extend existing governance rather than start from scratch, which is a practical argument a strategist can make to leadership."},
            {"type": "callout", "kind": "example", "title": "Business example: a multinational insurer", "text": "The insurer's European regulator asks how it governs AI across 14 countries. Rather than invent a framework, it adopts ISO/IEC 42001 as the management backbone, uses ISO/IEC 22989 and 23053 vocabulary in all vendor contracts so that 'training data', 'model' and 'inference' mean the same thing everywhere, maps high-risk use cases to EU AI Act obligations, and uses the NIST AI RMF functions to structure its risk register. Certification to 42001 becomes a selling point in corporate tenders."},
            {"type": "callout", "kind": "aws", "title": "AWS alignment", "text": "AWS publishes responsible AI and governance guidance (for example, the AWS Cloud Adoption Framework for AI and the Well-Architected Responsible AI Lens) that organizations map to ISO/IEC 42001 and NIST AI RMF when they build their own AI management systems. The exam expects you to know what the standards are for, not their clause numbers."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "Discriminator: 42001 is about the organization (management system, governance, certification); 23053 is about the system (describing components of an ML-based AI system). If the stem asks for 'a certifiable approach to governing AI across the enterprise', choose 42001. If it asks for 'a consistent way to describe and compare the architecture of ML systems', choose 23053."},
            {"type": "scenario", "situation": "A global retailer's board wants independent assurance that AI is being managed responsibly across all business units, and the CIO wants a structure that auditors recognize.", "question": "Which framework is the MOST appropriate foundation?", "answer": "ISO/IEC 42001, because it specifies requirements for an AI management system that can be audited and certified, giving the board third-party assurance. ISO/IEC 23053 would help document individual systems but does not provide organization-wide governance requirements."}
          ],
          "keyTerms": [
            {"term": "ISO/IEC 23053", "def": "An international standard (2022) that provides a framework for describing a generic AI system that uses machine learning, including its components and their functions."},
            {"term": "ISO/IEC 42001", "def": "An international standard (2023) specifying requirements for establishing, implementing, maintaining and continually improving an AI management system; organizations can be certified against it."},
            {"term": "ISO/IEC 22989", "def": "The international standard that defines AI concepts and terminology, providing a shared vocabulary."},
            {"term": "AI management system (AIMS)", "def": "The set of policies, roles, processes and controls an organization uses to govern its development and use of AI."},
            {"term": "NIST AI RMF", "def": "A voluntary US framework for managing AI risks organized around the functions Govern, Map, Measure and Manage."},
            {"term": "EU AI Act risk tiers", "def": "The EU regulation's classification of AI systems into unacceptable, high, limited and minimal risk, with obligations that scale with the tier."}
          ],
          "examTips": [
            "Know the one-line purpose of each named framework; the exam tests recognition and selection, not clause-level detail.",
            "Unified vocabulary is itself the point: answers that establish shared definitions across teams and vendors address root causes of governance failure.",
            "Certification and auditability are strong cues for ISO/IEC 42001; binding legal obligations by risk tier are cues for the EU AI Act; voluntary risk functions are cues for NIST AI RMF."
          ],
          "sources": [
            {"title": "ISO/IEC 23053:2022 Framework for Artificial Intelligence (AI) Systems Using Machine Learning (ML) (EVS catalogue)", "url": "https://www.evs.ee/en/iso-iec-23053-2022"},
            {"title": "ISO/IEC 42001:2023 Information technology - Artificial intelligence - Management system (ISO)", "url": "https://www.iso.org/standard/81230.html"},
            {"title": "ISO/IEC 42001 Artificial intelligence management systems (ISO overview)", "url": "https://www.iso.org/standard/42001"}
          ]
        }
      ]
    },
    {
      "id": "1.2",
      "title": "Identify and select appropriate AI solution types.",
      "lessons": [
        {
          "id": "1.2.1",
          "skill": "Determine when to use rule-based automation and when to use AI solutions.",
          "title": "Rules vs. AI: Choosing the Right Tool",
          "minutes": 12,
          "content": [
            {"type": "p", "text": "The most valuable sentence in AWS documentation for this skill is blunt: ML is not a solution for every type of problem. You do not need ML if you can determine the target value with simple rules, computations or predetermined steps that can be programmed without data-driven learning. **Rule-based automation** (if-then logic, workflow engines, robotic process automation) is deterministic: the same input always produces the same output, every decision can be traced to a written rule, and it costs almost nothing per transaction. **AI solutions** are probabilistic: they handle variability and scale that rules cannot, at the price of uncertainty, data dependence and ongoing monitoring. The strategist's job is to resist the pull of the newer technology and pick the simplest tool that reliably solves the problem."},
            {"type": "h", "text": "Decision criteria"},
            {"type": "table", "headers": ["Criterion", "Favors rule-based automation", "Favors AI / ML"], "rows": [
              ["Can the logic be written down?", "Yes, completely, in a manageable number of rules.", "No: too many interacting factors, exceptions or judgment calls (AWS: you cannot code the rules)."],
              ["How stable is the logic?", "Rarely changes (tax thresholds, approval limits, regulatory checks).", "Patterns shift over time or differ by context (fraud tactics, customer preferences)."],
              ["Input type", "Structured, well-formed fields.", "Unstructured or highly variable inputs: free text, images, speech."],
              ["Error tolerance", "Zero or near-zero tolerance; every decision must be explainable and auditable.", "Some error is acceptable or can be caught by human review; value comes from scale."],
              ["Scale and volume", "Any volume, but rules do not improve with volume.", "Volume too large for people to handle, or where more data improves results (AWS: you cannot scale)."],
              ["Data availability", "Little or no historical data needed.", "Sufficient quality historical data exists (or can be collected)."],
              ["Cost profile", "Low build cost, low run cost, predictable.", "Higher build cost, recurring inference and monitoring cost."]
            ]},
            {"type": "h", "text": "The hybrid pattern"},
            {"type": "p", "text": "Most mature solutions combine both. Rules enforce hard constraints (a loan above a legal limit is always rejected; a refund over a threshold always needs a manager), while AI handles the gray zone (which of 50,000 claims most deserve a human look). Rules also wrap AI as guardrails: they validate model outputs, route low-confidence predictions to people, and provide a deterministic fallback when the model is unavailable. On the exam, an answer that proposes 'rules for the compliance constraints and ML for the judgment-heavy part' is often the best one."},
            {"type": "callout", "kind": "example", "title": "Business example: accounts payable", "text": "A manufacturer wants to automate invoice processing. Matching an invoice number to a purchase order and checking that the amount is within tolerance is pure rules: deterministic, auditable, cheap. Reading supplier invoices that arrive as PDFs in 30 layouts and extracting the fields is an AI task (document understanding), because no rule set can anticipate every layout. Deciding whether an unusual invoice looks fraudulent is ML. The right design uses all three, and the business case is strongest when the rule-based parts are done first because they deliver fast, low-risk savings."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "When the stem says the process follows clear, stable, documented rules and must be fully auditable, the answer is rule-based automation, even if the question is in an AI exam. Choosing AI there is the classic over-engineering distractor. Conversely, when inputs are unstructured or the rules would be impossible to enumerate, AI is justified."},
            {"type": "scenario", "situation": "A utility wants to automatically apply a late-payment fee when a bill is more than 30 days overdue, with no exceptions permitted by regulation.", "question": "Should the strategist recommend an AI model?", "answer": "No. The logic is fully specified, stable and must be applied identically every time. Rule-based automation is cheaper, faster to implement and fully auditable. AI would introduce unnecessary cost, uncertainty and governance burden."}
          ],
          "keyTerms": [
            {"term": "Rule-based automation", "def": "Software that executes explicitly programmed if-then logic; deterministic and fully traceable."},
            {"term": "Deterministic", "def": "Always producing the same output for the same input, with no probability involved."},
            {"term": "Probabilistic", "def": "Producing outputs with associated likelihoods; the same input may yield different or uncertain results."},
            {"term": "Robotic process automation (RPA)", "def": "Rule-based software bots that mimic human clicks and keystrokes across applications."},
            {"term": "Hybrid solution", "def": "A design that uses rules for fixed constraints and guardrails while AI handles variable, judgment-based decisions."}
          ],
          "examTips": [
            "The exam rewards restraint: if rules can solve it, rules win on cost, speed, auditability and risk.",
            "Three cues for AI: rules cannot be enumerated, inputs are unstructured or highly variable, and volume exceeds human capacity while some error is tolerable.",
            "Hybrid answers (rules as guardrails around AI) are frequently the best option in scenarios that mention both compliance constraints and judgment."
          ],
          "sources": [
            {"title": "When to Use Machine Learning (Amazon Machine Learning Developer Guide)", "url": "https://docs.aws.amazon.com/machine-learning/latest/dg/when-to-use-machine-learning"},
            {"title": "What is Artificial Intelligence? (AWS)", "url": "https://aws.amazon.com/what-is/artificial-intelligence/"}
          ]
        },
        {
          "id": "1.2.2",
          "skill": "Distinguish AI agents from other AI solutions and identify the core capabilities of AI agents (for example, autonomy, tool use, agent-to-agent communication, and orchestration strategies).",
          "title": "AI Agents: Capabilities and Orchestration",
          "minutes": 14,
          "content": [
            {"type": "p", "text": "A chatbot answers; an **AI agent** acts. AWS defines an AI agent as a software program that can interact with its environment, collect data, and use that data to perform self-directed tasks that meet predetermined goals. Humans set the goal; the agent decides the steps. Amazon Bedrock documentation describes an agent as an application that carries out **orchestration** by cyclically interpreting inputs and producing outputs using a foundation model, where orchestration means coordinating between foundation models and enterprise data and applications to carry out a task. The practical difference from a plain GenAI assistant is that an agent can plan a multi-step job, call tools and systems, remember context, check its own progress and finish without a human prompting each step."},
            {"type": "h", "text": "Core capabilities of an agent"},
            {"type": "table", "headers": ["Capability", "What it means", "Business relevance"], "rows": [
              ["Autonomy", "Acts toward a goal without constant human instruction; chooses the next action itself.", "Delivers end-to-end task completion, but requires guardrails and approval thresholds for irreversible actions."],
              ["Planning and reasoning", "Breaks a goal into ordered steps using a foundation model as the reasoning engine.", "Handles complex, variable workflows that rules cannot enumerate."],
              ["Tool use", "Connects to APIs, databases, documents, code execution and web browsers to act beyond generating text.", "This is where business value is realized: the agent can actually book, update, query or file."],
              ["Memory", "Retains short-term context within a session and long-term knowledge across sessions.", "Personalization and continuity; also a data-governance surface."],
              ["Agent-to-agent communication", "Specialized agents exchange information and delegate sub-tasks to one another.", "Lets you compose a team of focused agents instead of one monolithic system."],
              ["Orchestration", "A supervisor or orchestrator agent coordinates specialist agents, routes requests and assembles the result.", "Determines reliability, cost and auditability of multi-agent systems."],
              ["Learning and reflection", "Assesses its own output, takes corrections, improves from feedback.", "Improves over time but needs monitoring and evaluation."]
            ]},
            {"type": "h", "text": "Orchestration strategies"},
            {"type": "ul", "items": [
              "**Single agent with tools**: one agent reasons and calls several tools. Simplest; good when the task is bounded.",
              "**Supervisor (hierarchical) collaboration**: a supervisor agent plans, delegates to collaborator agents with narrow roles, and composes the answer. Amazon Bedrock multi-agent collaboration uses exactly this model, with the guidance that roles must be clearly designated and overlap minimized.",
              "**Supervisor with routing**: for simple requests the supervisor routes directly to the one collaborator that can handle it, saving tokens and latency; for complex requests it falls back to full planning.",
              "**Sequential (pipeline)**: agents hand off in a fixed order (draft, review, publish). Predictable and auditable.",
              "**Parallel**: independent sub-tasks run at the same time and results are merged. Fast, but needs a reconciliation step."
            ]},
            {"type": "callout", "kind": "aws", "title": "AWS at a strategic level", "text": "Amazon Bedrock AgentCore is the AWS platform for building, deploying and operating agents at scale with any framework and any model, offering modular services for a secure runtime, memory, a gateway that turns existing APIs into agent tools, identity and access control, observability, policy controls that intercept every tool call, evaluations, and a registry for approved agents and tools. Pricing is consumption-based with no upfront commitment. Amazon Bedrock Agents (now Bedrock Agents Classic) introduced the supervisor and collaborator model and is in maintenance mode for new customers. For the exam, know what these capabilities are for, not how to configure them."},
            {"type": "callout", "kind": "example", "title": "Business example: mortgage servicing", "text": "A lender builds a supervisor agent that takes customer requests, decides whether the request concerns an existing mortgage, a new application or a general question, and routes it to one of three collaborator agents, each with its own tools (payment system, application system, policy knowledge base) and guardrails. The supervisor composes the final answer. Compared with a single chatbot, the agent can actually reschedule a payment or start an application, and the narrow roles make each collaborator easier to test and audit."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "Agentic AI is the right answer when the scenario needs multi-step execution across systems with minimal human prompting. It is the wrong answer when the need is a single question-and-answer, a prediction or a fixed workflow: there a simpler assistant, an ML model or rules is cheaper and safer. Also expect questions about safeguards: approval thresholds for irreversible actions, scoped tool permissions, observability and audit logs."},
            {"type": "scenario", "situation": "An airline wants a system that, when a flight is cancelled, rebooks affected passengers, issues vouchers within policy limits, updates the CRM and emails each customer, escalating only unusual cases to staff.", "question": "Which solution type fits, and what governance should accompany it?", "answer": "An AI agent (or a supervised multi-agent system) because the task is multi-step, spans several systems and needs autonomy. Governance should include scoped tool permissions, policy rules for voucher limits, human approval for exceptions, and observability to trace every action."}
          ],
          "keyTerms": [
            {"term": "AI agent", "def": "Software that interacts with its environment and takes self-directed, multi-step actions to achieve goals set by humans."},
            {"term": "Autonomy", "def": "An agent's ability to decide and execute its next actions without a human directing each step."},
            {"term": "Tool use", "def": "An agent's ability to call external APIs, databases, code or applications to take actions beyond generating text."},
            {"term": "Orchestration", "def": "Coordinating foundation models, data, tools and other agents to complete a task end to end."},
            {"term": "Supervisor agent", "def": "An agent that plans, delegates sub-tasks to collaborator agents and assembles the final result."},
            {"term": "Agent-to-agent communication", "def": "Structured exchange of tasks and information between specialized agents in a multi-agent system."},
            {"term": "Amazon Bedrock AgentCore", "def": "The AWS platform for building, deploying and operating AI agents securely at scale with any framework and model."}
          ],
          "examTips": [
            "Four discriminators of an agent versus an assistant: pursues a goal over multiple steps, uses tools to act, keeps memory, and can collaborate with other agents under an orchestrator.",
            "Supervisor-and-collaborator is the orchestration pattern most likely to appear; remember clearly separated roles and minimal overlap.",
            "Autonomy always comes paired with safeguards in correct answers: scoped permissions, approval thresholds, policy controls and observability."
          ],
          "sources": [
            {"title": "What are AI Agents? (AWS)", "url": "https://aws.amazon.com/what-is/ai-agents/"},
            {"title": "What is Amazon Bedrock AgentCore?", "url": "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html"},
            {"title": "Use multi-agent collaboration with Amazon Bedrock Agents", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html"}
          ]
        },
        {
          "id": "1.2.3",
          "skill": "Describe why AI solutions require ongoing monitoring and updates to detect and remediate model drift and performance changes.",
          "title": "Model Drift and Ongoing Monitoring",
          "minutes": 12,
          "content": [
            {"type": "p", "text": "Traditional software keeps working until someone changes it. An AI model keeps degrading until someone maintains it. The reason is **model drift**: a model learns patterns from a snapshot of historical data, and the world the model operates in keeps moving. The AWS Well-Architected Machine Learning Lens puts it plainly: when a model encounters drift it is essentially making predictions on data distributions it was not trained on, which can lead to decreased accuracy and potentially harmful business decisions. It lists the anti-pattern explicitly: assuming that a model trained on historical data will remain accurate indefinitely. For a strategist this converts into a budget and governance rule: every AI line item needs a recurring monitoring and retraining allowance, not just a build cost."},
            {"type": "h", "text": "Types of drift and performance change"},
            {"type": "table", "headers": ["Type", "What changes", "Business example", "How it is detected"], "rows": [
              ["Data drift (input drift)", "The statistical properties of inputs move away from the training data.", "A retailer's customer base shifts younger after a marketing campaign; the recommendation model was trained on older shoppers.", "Compare live input distributions with a baseline built from training data."],
              ["Concept drift", "The relationship between inputs and the outcome changes.", "Fraudsters change tactics; features that signaled fraud last year are now benign.", "Compare predictions with actual outcomes (ground truth) as they arrive; accuracy falls."],
              ["Bias drift", "Model outcomes become unfair across groups over time.", "A hiring screener's approval rate for one demographic diverges after an applicant pool shift.", "Monitor fairness metrics against thresholds."],
              ["Feature attribution drift", "The features driving predictions change in importance.", "A credit model starts relying heavily on postcode, raising regulatory concern.", "Explainability monitoring compares attribution rankings."],
              ["Upstream and system changes", "A data pipeline, schema or vendor model version changes.", "A foundation model provider updates the model; a prompt that worked now produces different output.", "Regression evaluation suites run on each change."]
            ]},
            {"type": "p", "text": "Amazon SageMaker Model Monitor, for instance, provides monitoring for data quality, model quality, bias drift and feature attribution drift by creating a baseline from the training data, comparing production data with it on a schedule and raising alerts (via Amazon CloudWatch) when constraints are violated so teams can retrain, audit upstream systems or fix quality issues. The Well-Architected guidance adds the strategic steps: set thresholds that balance sensitivity against false alarms, define retraining criteria, automate retraining pipelines where justified, and document drift incidents to build institutional knowledge."},
            {"type": "h", "text": "What a strategist should put in place"},
            {"type": "ol", "items": [
              "A baseline and business KPIs captured at launch (accuracy, but also conversion, cost per case, complaint rate).",
              "Monitoring ownership: a named team watches the dashboards and owns the response.",
              "Thresholds and escalation: what level of degradation triggers investigation, retraining or rollback.",
              "A retraining and re-evaluation budget and cadence driven by observed drift rather than an arbitrary calendar.",
              "For GenAI: evaluation sets that are re-run whenever the prompt, knowledge base or model version changes, plus monitoring of hallucination and guardrail interventions."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example: demand forecasting after a shock", "text": "A grocery chain's forecasting model, trained on 2017-2019 data, performed well until buying patterns changed abruptly in 2020. Stores experienced stock-outs on staples and overstock on others. The company had no drift monitoring, so the problem was discovered through lost sales rather than alerts. Afterwards it introduced weekly comparison of forecast error against a baseline, an automated alert when error exceeded a threshold, and a quarterly retraining budget. The second shock (a supplier disruption) was detected within days."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "Any answer implying 'deploy once and forget' is wrong. Correct answers include continuous monitoring, baselines, alert thresholds, retraining triggers and clear ownership. Distinguish data drift (inputs changed) from concept drift (the meaning of the inputs changed) when the stem gives enough detail."},
            {"type": "scenario", "situation": "A bank's fraud model was 95 percent accurate at launch. Nine months later the fraud team reports a rising number of missed cases, although the model has not been changed.", "question": "What is happening and what should the strategist recommend?", "answer": "Concept drift: fraud patterns have changed so the learned relationships no longer hold. Recommend comparing predictions with confirmed outcomes, retraining with recent labeled data, and instituting ongoing monitoring with alert thresholds so the next shift is caught early rather than reported by the business."}
          ],
          "keyTerms": [
            {"term": "Model drift", "def": "The decline in a model's performance over time as production conditions diverge from the data it was trained on."},
            {"term": "Data drift", "def": "A change in the statistical distribution of model inputs compared with the training data."},
            {"term": "Concept drift", "def": "A change in the relationship between inputs and the outcome the model predicts."},
            {"term": "Baseline", "def": "Reference statistics computed from training data (or launch performance) against which production behavior is compared."},
            {"term": "Ground truth", "def": "The actual outcomes that later become known and allow prediction accuracy to be measured."},
            {"term": "Retraining", "def": "Training the model again on more recent data to restore performance after drift."}
          ],
          "examTips": [
            "Drift is the reason AI has an operating cost that rules-based software does not; budget and ownership answers score well.",
            "Baseline first, then monitor, then retrain on evidence: answers that retrain on an arbitrary schedule without monitoring are flagged as anti-patterns by AWS.",
            "GenAI drifts too: provider model updates, knowledge-base staleness and prompt changes all require re-evaluation."
          ],
          "sources": [
            {"title": "MLPERF06-BP03 Evaluate data drift (AWS Well-Architected Machine Learning Lens)", "url": "https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/mlperf06-bp03.html"},
            {"title": "Data and model quality monitoring with Amazon SageMaker Model Monitor", "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html"}
          ]
        },
        {
          "id": "1.2.4",
          "skill": "Establish transparent classification of AI tools (for example, approved, blocked, under evaluation) to mitigate shadow AI risks.",
          "title": "Shadow AI and Transparent Tool Classification",
          "minutes": 12,
          "content": [
            {"type": "p", "text": "**Shadow AI** is the use of AI tools that the organization has not approved or does not know about: an analyst pasting a customer list into a consumer chatbot, a developer wiring a personal API key into a prototype, a vendor switching on an AI feature inside software procurement already signed off. AWS describes it as the natural result when organizations ban GenAI outright or adopt it slowly: employees turn to consumer-grade applications, creating unmanaged and uncontrolled data risks. An AWS blog adds the sharp comparison that shadow IT required someone to install software, while shadow AI only requires a browser tab. The risks are data leakage, intellectual property exposure, prompt injection through untrusted content, hallucinated outputs flowing into decisions, regulatory gaps and a complete lack of audit trail."},
            {"type": "h", "text": "Why prohibition fails and classification works"},
            {"type": "p", "text": "Blanket bans push usage onto personal devices where the organization has no visibility at all. The approach AWS recommends is dual: provide approved tooling so the sanctioned path is the easiest path, and build observability (monitoring of models in use, costs, prompts and outputs, and guardrail enforcement) to detect what falls outside it. A transparent **tool classification** turns that into something every employee can act on. Publishing the list, the criteria and the request process is what makes it transparent; a secret list is just another ban."},
            {"type": "table", "headers": ["Status", "Meaning", "Typical conditions", "Example"], "rows": [
              ["Approved", "Sanctioned for use with defined data classes; procurement, security and legal review complete.", "Enterprise agreement, no training on company data, single sign-on, logging, data residency confirmed.", "Company-licensed assistant built on Amazon Bedrock with Guardrails; approved coding assistant."],
              ["Approved with conditions (limited use)", "Allowed for specific teams or only with public or internal (non-confidential) data.", "Data-class restrictions, named owners, periodic review.", "Public web-based translation tool allowed for marketing copy only."],
              ["Under evaluation", "Requested and being assessed; not yet allowed for business data.", "Owner assigned, review deadline committed, pilot scope defined.", "A new vendor summarization tool in a 30-day security and legal review."],
              ["Blocked (prohibited)", "Not permitted; technically restricted where possible.", "Fails data-handling, security, IP or regulatory criteria, or duplicates an approved tool with higher risk.", "Consumer chatbot accounts that train on user inputs."]
            ]},
            {"type": "h", "text": "Elements of a workable program"},
            {"type": "ul", "items": [
              "Discovery first: inventory what is actually in use before deciding what to block (surveys, expense data, network and endpoint telemetry).",
              "Clear evaluation criteria: data handling and retention, training on customer data, security certifications, IP and licensing terms, regulatory fit, cost and overlap with existing tools.",
              "A fast request path with a published turnaround target so under-evaluation does not become a permanent waiting room.",
              "A cross-functional governance body (security, legal, data, business owners) that owns the decisions and the published list; Domain 3 covers these structures in depth.",
              "Enablement: AI literacy training that explains which data can go where, and why.",
              "Extend the scheme to agents: define which agents may act on the organization's behalf, approval thresholds for irreversible actions, and treat agent-to-tool connections as identity boundaries."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example: a professional services firm", "text": "Partners discover that consultants are using at least six consumer AI tools on client documents. Instead of a ban, the firm runs a two-week discovery, publishes a three-tier list (approved, under evaluation, blocked), launches an approved assistant on Amazon Bedrock with single sign-on and logging within 30 days, and commits to a 10-business-day review for new requests. Shadow usage falls because the sanctioned tool is faster and already connected to the firm's templates, and the firm can now evidence its data handling to clients."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "The best answers combine visibility, a published classification, an approved alternative and a request process. Answers that only block, only monitor, or rely on an unpublished policy are distractors. The word transparent in the skill statement is a cue that the list and criteria must be visible to employees."},
            {"type": "scenario", "situation": "A hospital's security team finds that nurses are using a free AI transcription app for shift notes. Leadership wants to stop patient-data exposure without losing the time savings staff clearly value.", "question": "What should the strategist recommend?", "answer": "Classify the free app as blocked for patient data (it fails data-handling criteria), place it or an equivalent under evaluation if the vendor offers an enterprise version, provide an approved transcription capability with appropriate data protections, publish the list and criteria, and brief staff. This mitigates risk while preserving the productivity gain."}
          ],
          "keyTerms": [
            {"term": "Shadow AI", "def": "Use of AI tools or features that the organization has not approved, inventoried or secured."},
            {"term": "Tool classification", "def": "A published scheme that assigns each AI tool a status such as approved, approved with conditions, under evaluation or blocked."},
            {"term": "Sanctioned path", "def": "The approved, easy-to-use AI capability that makes compliant behavior the default choice."},
            {"term": "Data classification", "def": "Labeling data by sensitivity (public, internal, confidential, regulated) to define what may be shared with which tools."},
            {"term": "Observability", "def": "Monitoring of AI usage, costs, prompts, outputs and guardrail actions that gives the organization visibility and audit evidence."}
          ],
          "examTips": [
            "Shadow AI answers follow a pattern: discover, classify transparently, provide an approved alternative, enable a fast request process, monitor.",
            "Blocking alone is almost never the best answer; it drives usage underground and loses visibility.",
            "Under evaluation is a real status with an owner and deadline, not a holding pen; questions may test whether you give it a turnaround commitment."
          ],
          "sources": [
            {"title": "Shadow generative AI (AWS whitepaper: Navigating the security landscape of generative AI)", "url": "https://docs.aws.amazon.com/whitepapers/latest/navigating-security-landscape-genai/shadow-generative-ai.html"},
            {"title": "Govern AI adoption before it governs you (AWS Migration and Modernization Blog)", "url": "https://aws.amazon.com/blogs/migration-and-modernization/govern-ai-adoption-before-it-governs-you/"},
            {"title": "AI Gone Wild: Why Shadow AI Is Your IT Team's Worst Nightmare (Cloud Security Alliance)", "url": "https://cloudsecurityalliance.org/articles/ai-gone-wild-why-shadow-ai-is-your-it-team-s-worst-nightmare"}
          ]
        }
      ]
    },
    {
      "id": "1.3",
      "title": "Apply GenAI concepts and techniques.",
      "lessons": [
        {
          "id": "1.3.1",
          "skill": "Apply basic prompt engineering principles to achieve desired AI outputs.",
          "title": "Prompt Engineering Principles",
          "minutes": 13,
          "content": [
            {"type": "p", "text": "Amazon Bedrock documentation defines **prompt engineering** as the practice of optimizing textual input to a large language model (LLM) to obtain desired responses, and notes that the quality of the prompts you provide can impact the quality of the model's responses. For a business strategist this matters in two ways. First, many disappointing GenAI pilots are prompt problems, not model problems, and fixing the prompt is cheaper than fine-tuning or switching vendors. Second, prompts are a governance surface: a well-designed prompt template encodes policy (tone, scope, what not to answer) and can be versioned, tested and audited like any other business rule."},
            {"type": "h", "text": "Anatomy of a good prompt"},
            {"type": "p", "text": "AWS describes a prompt as combining several components: the **instruction** (the task), the **context** (relevant domain information or role), **demonstration examples**, and the **input** the model should work on. Depending on the use case you combine one or more of these."},
            {"type": "table", "headers": ["Principle", "What to do", "Why it helps"], "rows": [
              ["Be specific about the task", "State exactly what you want: summarize in one sentence, classify as A or B, draft a reply under 120 words.", "Vague instructions produce generic output; specificity narrows the model's search."],
              ["Provide context and a role", "Tell the model who it is and who the audience is (you are a claims adjuster writing to a customer).", "Context steers vocabulary, assumptions and tone."],
              ["Show examples (few-shot)", "Include two or three input-output pairs that demonstrate the desired result.", "AWS calls this few-shot prompting or in-context learning; it calibrates format and judgment without training."],
              ["Specify the output format", "Ask for JSON, a table, bullet points or a fixed template; name the fields.", "Downstream systems and people can consume the result reliably."],
              ["Separate sections clearly", "Use delimiters or XML-style tags to separate instructions, context, examples and input.", "Reduces confusion between instructions and data; AWS recommends tags for Anthropic Claude models."],
              ["Ask for reasoning when the task is complex", "Request that the model think step by step or show its work before the final answer.", "AWS guidance found that thinking and answer tags improved accuracy on nuanced, multi-source questions."],
              ["Ground the model in data", "Provide the source text or use RAG so the model answers from your documents, and tell it to say when it does not know.", "AWS lists RAG and prompt refinement as primary ways to reduce hallucinations."],
              ["Iterate and test", "Treat prompts as versioned assets: test against a set of representative cases and compare variants.", "Prompt behavior changes with the model version; evaluation protects quality."]
            ]},
            {"type": "h", "text": "Settings and limits a strategist should recognize"},
            {"type": "ul", "items": [
              "**Inference parameters** such as temperature control how varied or deterministic responses are; lower settings suit compliance text, higher suit creative ideation. These are set by the application, not by the model provider.",
              "Models do not remember prior requests through the API unless the earlier conversation is included in the current prompt; conversational memory is something the application (or an agent platform) provides, and it consumes context window (lesson 1.3.2).",
              "**Prompt injection** is the attack of hiding instructions in content the model reads (a document, an email, a web page). Prompt design, guardrails and limiting what the model can act on are the defenses; this links to Domain 3."
            ]},
            {"type": "callout", "kind": "example", "title": "Business example: customer-service reply drafting", "text": "An e-commerce company's first prompt was 'Reply to this customer'. Agents found the drafts too long, inconsistent in tone and occasionally promising refunds outside policy. The revised template sets a role (support specialist for the company), gives the refund policy as context, includes two example replies, requires a 100-word limit and a friendly-professional tone, and ends with a rule: if the request falls outside policy, say you will escalate rather than promising an outcome. Agent edit time fell by half with no model change."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "When a scenario reports generic, inconsistent or off-format GenAI output and the team is considering fine-tuning or a new model, the best first step is almost always to improve the prompt: add context, examples and an explicit output format. Fine-tuning is the right answer only when prompting with examples has been tried and the need is a durable change in style or domain behavior."},
            {"type": "scenario", "situation": "A marketing team's GenAI tool produces product descriptions in wildly different lengths and voices, and legal has flagged unsupported claims.", "question": "What should the strategist recommend first?", "answer": "A prompt template that defines the brand voice and target length, gives two or three approved example descriptions (few-shot), supplies the verified product facts as context and instructs the model to use only those facts. This addresses both consistency and the unsupported-claims risk at minimal cost before any customization is considered."}
          ],
          "keyTerms": [
            {"term": "Prompt", "def": "The input (instructions, context, examples and data) given to a model to guide its response."},
            {"term": "Prompt engineering", "def": "The practice of designing and refining prompts to obtain desired, reliable outputs from a model."},
            {"term": "Zero-shot vs. few-shot prompting", "def": "Asking with no examples versus including a few demonstration input-output pairs in the prompt."},
            {"term": "Prompt template", "def": "A reusable prompt structure with placeholders for variable content, maintained and versioned like a business asset."},
            {"term": "Inference parameters", "def": "Settings such as temperature that adjust how varied or constrained a model's responses are."},
            {"term": "Prompt injection", "def": "An attack that embeds hidden instructions in content the model processes in order to manipulate its behavior."}
          ],
          "examTips": [
            "Prompt first, then RAG, then fine-tuning: the exam favors the cheapest effective lever.",
            "Memorize the components of a prompt (instruction, context, examples, input) and the practices (specificity, role, format, delimiters, examples, grounding, iteration).",
            "Prompt templates are governance tools; answers that version and test prompts against evaluation sets reflect operational maturity."
          ],
          "sources": [
            {"title": "Prompt engineering concepts (Amazon Bedrock User Guide)", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html"},
            {"title": "Best practices to avoid prompt injection attacks (AWS Prescriptive Guidance: LLM prompt engineering best practices)", "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/llm-prompt-engineering-best-practices/best-practices.html"},
            {"title": "Amazon Bedrock key terminology", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/key-definitions.html"}
          ]
        },
        {
          "id": "1.3.2",
          "skill": "Identify when token limits or context window constraints affect GenAI system performance.",
          "title": "Tokens and Context Windows",
          "minutes": 11,
          "content": [
            {"type": "p", "text": "Generative AI models do not read words; they read **tokens**. Amazon Bedrock documentation defines a token as a sequence of characters that a model can interpret or predict as a single unit of meaning: a token could be a whole word, part of a word (such as the suffix -ed), a punctuation mark or a common phrase. As a rule of thumb for English text, a token is a little less than a word; Anthropic's Bedrock material equates roughly 200,000 tokens with about 150,000 words. Tokens matter to a strategist for two reasons: they are the unit you are billed in (input tokens in, output tokens out), and they are the unit that fills the **context window**."},
            {"type": "h", "text": "What the context window is"},
            {"type": "p", "text": "The context window is all the text a model can reference when generating a response, including the response itself. It is the model's working memory for a single request, distinct from the vast data it was trained on. Everything counts toward it: system instructions, the full conversation so far, retrieved documents, tool definitions and results, images, and the output being generated. Context windows have grown rapidly (several leading models on Amazon Bedrock now offer up to one million tokens), but a larger window is not automatically better: as token count grows, accuracy and recall tend to degrade (sometimes called context rot), and cost and latency rise with every token processed."},
            {"type": "h", "text": "Symptoms that the limit is affecting performance"},
            {"type": "table", "headers": ["Symptom", "Likely cause", "Business response"], "rows": [
              ["Request rejected or truncated; the assistant stops mid-answer.", "Input plus requested output exceeds the context window or the output token limit.", "Chunk or summarize inputs; retrieve only relevant passages (RAG); use a model with a larger window."],
              ["Long conversations forget early instructions or facts.", "Older turns were dropped or compressed to make room; the model never saw them in this request.", "Summarize or compact history; restate key constraints; store state outside the prompt (agent memory)."],
              ["Answers get vaguer or less accurate as more documents are added.", "Context rot: too much loosely relevant material dilutes attention.", "Curate context; improve retrieval precision; split tasks."],
              ["Cost per interaction climbing with no change in usage volume.", "Prompts have grown (longer histories, more documents, verbose templates); every token is billed.", "Trim templates, cache stable prefixes, set output length limits, monitor tokens per request."],
              ["Slower responses.", "More tokens to process per request.", "Same levers as cost: less context, smaller or faster models for simple tasks."]
            ]},
            {"type": "h", "text": "Why pricing follows tokens"},
            {"type": "p", "text": "Amazon Bedrock on-demand pricing is consumption-based per input and output token, with model-specific rates; some providers charge higher rates for very long prompts (for example, prompts beyond 200,000 tokens on a one-million-token model were priced at a premium when that capability launched). Provisioned Throughput, by contrast, buys a committed level of tokens per minute for predictable high-volume workloads. Either way, token discipline is cost discipline: a 20 percent shorter prompt template applied to a million conversations is a direct, recurring saving."},
            {"type": "callout", "kind": "example", "title": "Business example: contract review assistant", "text": "A procurement team's assistant worked well on 10-page agreements and failed on 300-page master service agreements: answers were truncated and sometimes ignored clauses near the end. The fix was not a bigger model alone. The team moved to a RAG design that retrieves only the clauses relevant to each question, added a summarization step for whole-document overviews, and set a maximum answer length. Accuracy improved and average cost per query fell by more than half because far fewer tokens were sent per request."},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "Cues for this skill: very long documents, long-running chats that lose track, truncated outputs, or token-driven cost increases. Correct answers chunk, summarize, retrieve selectively or compact history. Simply picking the largest available context window is rarely the best answer because of cost and context rot."},
            {"type": "scenario", "situation": "A help-desk assistant performs well for the first ten exchanges with a user but then starts contradicting instructions it was given at the start of the session.", "question": "What is the MOST likely explanation?", "answer": "The conversation has grown beyond what fits in the context window, so early turns (including the initial instructions) are no longer included or have been compressed. Remedies include summarizing history, restating critical constraints in the system prompt on each turn, and managing session memory outside the prompt."}
          ],
          "keyTerms": [
            {"term": "Token", "def": "The unit of text a model processes; roughly a word or part of a word, and the unit in which usage is billed."},
            {"term": "Context window", "def": "The maximum amount of text (in tokens), including input and output, a model can consider in a single request."},
            {"term": "Input and output tokens", "def": "Tokens sent to the model (prompt, context, history) and tokens the model generates; both are metered and both count toward the window."},
            {"term": "Truncation", "def": "Cutting off input or output when the token limit is reached, which can drop instructions or end answers early."},
            {"term": "Context rot", "def": "The tendency for model accuracy and recall to degrade as the amount of context in a request grows."},
            {"term": "Provisioned Throughput", "def": "An Amazon Bedrock purchasing option that reserves a committed rate of token processing for predictable, high-volume workloads."}
          ],
          "examTips": [
            "Tokens are both the performance limit and the billing unit; a question about either is really a question about both.",
            "RAG, summarization and chunking are the standard remedies for documents that exceed the window; compaction and restating constraints are the remedies for long conversations.",
            "Bigger context is a tool, not a fix: it raises cost and can reduce accuracy if the extra content is not relevant."
          ],
          "sources": [
            {"title": "Amazon Bedrock key terminology (token, inference, Provisioned Throughput)", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/key-definitions.html"},
            {"title": "Context windows (Claude Platform documentation)", "url": "https://platform.claude.com/docs/en/build-with-claude/context-windows"},
            {"title": "Anthropic's Claude Sonnet 4 in Amazon Bedrock: expanded context window (AWS What's New, Aug 2025)", "url": "https://aws.amazon.com/about-aws/whats-new/2025/08/anthropic-claude-sonnet-bedrock-expanded-context-window/"}
          ]
        },
        {
          "id": "1.3.3",
          "skill": "Recognize how model adaptation techniques (for example, Retrieval Augmented Generation [RAG], fine-tuning) improve AI responses for specific business needs.",
          "title": "Adapting Models: RAG and Fine-Tuning",
          "minutes": 14,
          "content": [
            {"type": "p", "text": "A foundation model knows a great deal about the world and nothing about your organization: not your policies, your product catalog, your tone of voice or anything that happened after its training data was collected. **Model adaptation** techniques close that gap. The three levers, in increasing order of cost and commitment, are prompt engineering (lesson 1.3.1), **Retrieval Augmented Generation (RAG)** and **fine-tuning**. A strategist's job is to match the lever to the business need: is the problem that the model lacks facts, or that it lacks a skill or style?"},
            {"type": "h", "text": "Retrieval Augmented Generation (RAG)"},
            {"type": "p", "text": "Amazon Bedrock documentation describes RAG as a three-step process: query and retrieve information from a data source, augment the prompt with that information to give the foundation model better context, and obtain a better response using the additional context. AWS lists the business benefits: it is more cost-effective than retraining a model on new knowledge, it keeps answers current because sources can be updated continuously, it builds trust because responses can cite their sources, and it gives the organization control (change sources, restrict retrieval by user permission, fix wrong citations). Amazon Bedrock Knowledge Bases provides this as a managed service: documents are converted to text, split into chunks, turned into embeddings, stored in a vector index and retrieved at query time, with the model answering either through direct quotations or a generated response."},
            {"type": "h", "text": "Fine-tuning and other customization"},
            {"type": "p", "text": "Fine-tuning changes the model itself. Amazon Bedrock supports **supervised fine-tuning** (labeled input-output examples teach the model what outputs to produce for what inputs, adjusting its parameters), **reinforcement fine-tuning** (reward functions score responses so the model improves iteratively without labeled pairs) and **distillation** (a large teacher model generates high-quality responses used to fine-tune a smaller, faster, cheaper student model). Training is charged on tokens processed multiplied by epochs, plus monthly storage for the custom model. Fine-tuning is the right lever when the need is a durable change in behavior: a specialized domain vocabulary, a strict house style, a consistent output structure, or a cheaper model that matches a bigger one on a narrow task."},
            {"type": "table", "headers": ["Question", "Prompt engineering", "RAG", "Fine-tuning"], "rows": [
              ["What problem does it solve?", "Unclear or inconsistent outputs; formatting; tone.", "The model lacks your facts, or facts change often.", "The model lacks a skill, style or domain behavior that examples in the prompt cannot fix."],
              ["Data needed", "A few examples.", "Your documents and data sources, kept current.", "Hundreds to thousands of high-quality labeled examples (or reward functions)."],
              ["Time and cost", "Hours; negligible cost.", "Days to weeks; ongoing retrieval and storage costs; no training cost.", "Weeks; training cost plus custom-model hosting and retraining when needs change."],
              ["Freshness", "Only what is in the prompt.", "As fresh as the source data.", "Frozen at training time; must retrain to update."],
              ["Traceability", "None beyond the prompt.", "High: answers can cite sources.", "Low: knowledge is embedded in parameters."],
              ["Typical business use", "Customer replies, summaries, classification.", "Policy assistants, support over product manuals, internal knowledge search.", "Domain-specific summarization in a regulated format, brand-voice generation at scale, cost reduction via distillation."]
            ]},
            {"type": "p", "text": "The levers combine. A common enterprise design is a fine-tuned or distilled model for a consistent task behavior, grounded by RAG for current facts, driven by a well-engineered prompt template. On the exam, choose RAG whenever the stem emphasizes proprietary, changing or citable information; choose fine-tuning when it emphasizes a persistent skill, style or format after prompting has failed; and choose prompt engineering whenever the problem looks like inconsistency rather than missing knowledge."},
            {"type": "callout", "kind": "example", "title": "Business example: an insurer's policy assistant", "text": "Agents need accurate answers about 400 policy documents that change monthly. Fine-tuning would freeze the policies at training time and offer no citations, so the insurer chooses RAG with Amazon Bedrock Knowledge Bases, restricting retrieval by product line permissions. Separately, the claims team wants settlement letters in a tightly regulated format that the model gets wrong even with examples; for that narrow, stable task the insurer fine-tunes a smaller model. Each decision follows the question: missing facts or missing skill?"},
            {"type": "callout", "kind": "exam-tip", "title": "Exam tip", "text": "RAG keywords: proprietary documents, frequently updated, needs citations, reduce hallucinations about company facts. Fine-tuning keywords: consistent style or format, domain-specific language, examples in the prompt not enough, lower cost per request via a smaller specialized model. Both are more expensive than prompt engineering, which is the default first step."},
            {"type": "scenario", "situation": "A pharmaceutical company wants a GenAI assistant that answers field-staff questions about dosing guidance that is revised several times a year, and compliance requires every answer to reference the source document.", "question": "Which adaptation technique is MOST appropriate?", "answer": "RAG (for example, Amazon Bedrock Knowledge Bases). The requirements are current, proprietary information and source attribution, both RAG strengths. Fine-tuning would embed outdated guidance and cannot cite sources."}
          ],
          "keyTerms": [
            {"term": "Model adaptation", "def": "Techniques that make a general foundation model perform better for a specific business need: prompting, RAG and fine-tuning."},
            {"term": "Retrieval Augmented Generation (RAG)", "def": "Retrieving relevant information from a data source and adding it to the prompt so the model answers with current, grounded context."},
            {"term": "Knowledge base", "def": "A managed repository of embedded documents that a GenAI application retrieves from at query time; Amazon Bedrock Knowledge Bases is the AWS service."},
            {"term": "Fine-tuning", "def": "Further training a foundation model on your labeled examples so its parameters change to suit a task, domain or style."},
            {"term": "Distillation", "def": "Using a large teacher model to generate training data that fine-tunes a smaller, cheaper student model."},
            {"term": "Hallucination", "def": "A confident but incorrect or fabricated model output; grounding via RAG and better prompts reduces it."}
          ],
          "examTips": [
            "Facts versus skills: RAG supplies facts that change; fine-tuning teaches skills and styles that persist.",
            "RAG offers citations and freshness; fine-tuning does not, so compliance and audit requirements usually point to RAG.",
            "Escalate levers in cost order: prompt engineering, then RAG, then fine-tuning; combinations are common in mature designs."
          ],
          "sources": [
            {"title": "What is RAG (Retrieval-Augmented Generation)? (AWS)", "url": "https://aws.amazon.com/what-is/retrieval-augmented-generation/"},
            {"title": "How Amazon Bedrock knowledge bases work", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/kb-how-it-works.html"},
            {"title": "Customize your model to improve its performance for your use case (Amazon Bedrock)", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html"}
          ]
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "d1-q01",
      "skill": "1.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A retail company deployed a product-recommendation model six months ago. The finance team notices that the monthly AI bill rises in direct proportion to website traffic, even though the data science team has not retrained the model since launch. Which AI concept BEST explains this cost pattern?",
      "options": [
        "Training, because the model learns from every new visitor",
        "Inference, because the model produces a prediction for every request",
        "Overfitting, because the model has become too complex",
        "Data labeling, because each visit must be labeled"
      ],
      "answer": [1],
      "explanation": "Inference is the recurring, per-request use of a trained model, so inference cost scales with usage volume. Training is the episodic process of building the model and has not happened since launch. Overfitting is a model-quality problem, not a billing pattern. Data labeling is a preparation activity for supervised training, not something that happens per visitor."
    },
    {
      "id": "d1-q02",
      "skill": "1.1.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A vendor proposes a fraud-detection model to a payments company. The strategist wants to set accurate expectations with executives about what the model is and how it will behave. Which TWO statements are correct?",
      "options": [
        "The model's predictions are probabilistic, so the business process must handle a share of incorrect decisions",
        "Once trained, the model will remain accurate indefinitely without further investment",
        "The model is the trained artifact produced by applying an algorithm to historical data",
        "Inference costs are incurred only once, at the time of training",
        "The algorithm and the model are the same thing and the terms are interchangeable"
      ],
      "answer": [0, 2],
      "explanation": "Predictions are probabilistic outputs, so error handling must be designed into the process (correct). The model is the output of training an algorithm on data (correct). Models degrade over time due to drift, so indefinite accuracy is false. Inference costs recur with every request, not once. The algorithm is the learning method; the model is what it produces, so they are not interchangeable."
    },
    {
      "id": "d1-q03",
      "skill": "1.1.2",
      "type": "single",
      "difficulty": "easy",
      "question": "A beverage distributor wants to predict next month's demand for each product at each warehouse using five years of structured sales, promotion and weather data. An executive suggests using a large language model because the company recently licensed one. What should the strategist recommend?",
      "options": [
        "Use the large language model, because generative AI is the most advanced form of AI",
        "Use traditional machine learning, because the need is a numeric forecast from structured historical data",
        "Use rule-based automation, because demand always follows fixed seasonal rules",
        "Use an AI agent, because forecasting requires autonomous multi-step reasoning"
      ],
      "answer": [1],
      "explanation": "A numeric forecast from structured history is a classic predictive ML problem, where traditional ML is cheaper, more accurate and more explainable than GenAI. GenAI generates content and is not the right engine for a forecasting task; choosing it because it is available is novelty bias. Demand does not follow fully specifiable fixed rules, so rules alone would underperform. An agent adds autonomy and tool use that the task does not need."
    },
    {
      "id": "d1-q04",
      "skill": "1.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "During an AI inventory, a consultant finds that a bank's transaction-limit checker applies fixed, programmed thresholds without learning from data, while its credit-scoring system learns from loan history and its customer assistant drafts personalized replies. Which classification is MOST accurate?",
      "options": [
        "All three are machine learning systems because they automate decisions",
        "The limit checker is rule-based AI but not ML; the credit scorer is traditional ML; the assistant is generative AI",
        "The limit checker and the credit scorer are generative AI; the assistant is traditional ML",
        "None of them is AI because none of them is a large language model"
      ],
      "answer": [1],
      "explanation": "AI is the umbrella that includes rule-based systems; ML is the subset that learns from data; GenAI is the subset of deep learning that creates content. The limit checker follows programmed rules (AI, not ML), the credit scorer learns from history (traditional ML), and the reply drafter generates text (GenAI). Automating decisions does not make a system ML, and AI is not limited to large language models."
    },
    {
      "id": "d1-q05",
      "skill": "1.1.3",
      "type": "single",
      "difficulty": "easy",
      "question": "A property management firm wants employees to ask natural-language questions about 50,000 lease agreements stored as scanned PDFs and get answers that reference the relevant clauses. Which statement about the data and solution direction is correct?",
      "options": [
        "The data is structured, so a business intelligence dashboard is the best solution",
        "The data is unstructured, so the solution needs text extraction, embeddings and a retrieval-based GenAI approach",
        "The data is structured, so a regression model trained on lease amounts will answer the questions",
        "The data is unstructured, so it cannot be used by AI until it is manually re-entered into a database"
      ],
      "answer": [1],
      "explanation": "Scanned lease documents are unstructured data. Making them answerable requires converting them to text, chunking, embedding and retrieving relevant passages for a GenAI model (the RAG pattern, such as Amazon Bedrock Knowledge Bases). Dashboards and regression models work on structured tables and cannot answer clause-level questions. Manual re-entry is unnecessary because GenAI techniques work directly on unstructured content."
    },
    {
      "id": "d1-q06",
      "skill": "1.1.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A strategist is sizing a generative AI opportunity for a telecommunications company and wants to identify which data sources are unstructured, because those are the ones GenAI newly unlocks. Which TWO sources are unstructured?",
      "options": [
        "Recorded customer-service calls",
        "The monthly billing table with customer ID, plan and amount",
        "Free-text technician field notes",
        "The network-outage log with timestamp, cell ID and duration columns",
        "The customer master table in the CRM"
      ],
      "answer": [0, 2],
      "explanation": "Audio recordings and free-text notes do not fit a fixed table schema and are unstructured; they require speech-to-text, extraction and embeddings, which is where GenAI adds new value. Billing tables, outage logs with fixed columns and CRM master tables are structured data suited to traditional analytics and ML."
    },
    {
      "id": "d1-q07",
      "skill": "1.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "An airline's GenAI travel assistant confidently tells customers about baggage fees that were changed three months ago and recommends lounges that have closed. The vendor suggests upgrading to a larger foundation model. What is the MOST likely root cause and the BEST first action?",
      "options": [
        "The model is too small; upgrade to the larger model",
        "The knowledge sources are stale (a timeliness failure); assign owners and an update cadence for the source documents",
        "The prompt lacks examples; add few-shot examples of correct answers",
        "The context window is too short; move to a model with a larger window"
      ],
      "answer": [1],
      "explanation": "Outdated answers point to a data-freshness (timeliness) problem in the sources the assistant retrieves. The fix is data ownership and an update cadence, not a bigger model, which would still answer from stale content. Few-shot examples improve format and consistency, not currency of facts. The context window governs how much the model can see at once, not whether the content is up to date."
    },
    {
      "id": "d1-q08",
      "skill": "1.1.4",
      "type": "multi",
      "difficulty": "hard",
      "question": "A hospital group's readmission-risk model achieved strong results in testing but performs poorly at two newly acquired rural hospitals. Investigation shows that the training data came almost entirely from urban hospitals and that the discharge-date field is captured differently by the rural hospitals' legacy systems. Which TWO actions address the root causes?",
      "options": [
        "Add representative data from the rural hospitals to the training set and re-evaluate by site",
        "Increase the model's complexity so it can learn more subtle patterns",
        "Standardize how the discharge-date field is captured across systems and assign a data owner",
        "Lower the risk threshold so more patients are flagged",
        "Replace the model with a generative AI assistant"
      ],
      "answer": [0, 2],
      "explanation": "The two root causes are representativeness (training data did not cover rural populations) and consistency (a key field is captured differently across systems). Adding representative data and standardizing the field with clear ownership fix them. Increasing complexity does not fix biased or inconsistent inputs and risks overfitting. Lowering the threshold masks the problem by flagging everyone. A GenAI assistant is the wrong tool for a structured risk prediction."
    },
    {
      "id": "d1-q09",
      "skill": "1.1.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A lender's data science team reports that its new default-prediction model is 99 percent accurate. When the strategist asks how accuracy was measured, the team says it was measured on the same loans used to train the model, and that accuracy on a sample of recent loans is much lower. Which concept BEST describes the issue?",
      "options": [
        "Concept drift caused by changing borrower behavior",
        "Overfitting revealed by the absence of a held-out test set",
        "Underfitting caused by a model that is too simple",
        "Prompt injection in the training data"
      ],
      "answer": [1],
      "explanation": "Evaluating on training data hides overfitting: the model memorized its training examples and does not generalize, which the lower performance on unseen loans reveals. The remedy is a proper train/validation/test split. Concept drift is a change over time in production, not an evaluation-method flaw. Underfitting would show poor performance on training data too. Prompt injection applies to GenAI inputs, not tabular credit models."
    },
    {
      "id": "d1-q10",
      "skill": "1.1.5",
      "type": "single",
      "difficulty": "easy",
      "question": "A manufacturer wants to build a model that classifies incoming supplier emails as urgent or routine. It has 20,000 historical emails that staff previously tagged as urgent or routine. Which learning approach is MOST appropriate, and why?",
      "options": [
        "Unsupervised learning, because the model must discover categories on its own",
        "Supervised learning, because labeled examples with known outcomes already exist",
        "Reinforcement learning, because the model should earn rewards for fast responses",
        "Rule-based automation, because urgency can always be determined by the sender"
      ],
      "answer": [1],
      "explanation": "The emails already carry labels (urgent or routine), which is exactly what supervised learning needs. Unsupervised learning is for unlabeled data where structure must be discovered. Reinforcement learning requires an environment with rewards for actions, which does not fit a classification task. Urgency cannot be reduced to a fixed rule about the sender, so rules alone would be unreliable."
    },
    {
      "id": "d1-q11",
      "skill": "1.1.6",
      "type": "single",
      "difficulty": "medium",
      "question": "A global insurer's board asks for an auditable, certifiable approach to governing AI across all business units, including policy, roles, risk assessment and continual improvement. Which framework is the MOST appropriate foundation?",
      "options": [
        "ISO/IEC 23053, the framework for describing AI systems that use machine learning",
        "ISO/IEC 42001, the requirements standard for an AI management system",
        "The EU AI Act's risk tiers",
        "ISO/IEC 22989, the AI concepts and terminology standard"
      ],
      "answer": [1],
      "explanation": "ISO/IEC 42001 specifies requirements for establishing, implementing, maintaining and continually improving an AI management system and is certifiable, which provides the board's assurance. ISO/IEC 23053 describes the components of an ML-based AI system but does not define organizational governance. The EU AI Act is a binding regulation with obligations by risk tier, not a management-system framework. ISO/IEC 22989 provides vocabulary, not governance requirements."
    },
    {
      "id": "d1-q12",
      "skill": "1.1.6",
      "type": "multi",
      "difficulty": "hard",
      "question": "A consulting firm is preparing an AI governance briefing for a multinational client whose legal, procurement and data science teams keep disagreeing about what terms such as model and training data mean in contracts. Which TWO statements about global frameworks are correct?",
      "options": [
        "ISO/IEC 23053 provides a framework for describing a generic AI system that uses machine learning, including its components and their functions",
        "ISO/IEC 42001 is a binding law that applies to all AI systems sold in the European Union",
        "Adopting shared international vocabulary (such as ISO/IEC 22989 and 23053) in contracts and policies reduces miscommunication between business, legal and technical teams and vendors",
        "The NIST AI RMF is a certification scheme that replaces the need for ISO/IEC 42001",
        "ISO/IEC 23053 certifies that an organization's overall AI governance is compliant"
      ],
      "answer": [0, 2],
      "explanation": "ISO/IEC 23053 is the ML-system description framework (correct), and unified vocabulary is exactly how organizations reduce cross-team and vendor miscommunication (correct). ISO/IEC 42001 is a voluntary, certifiable management-system standard, not a law; the EU AI Act is the binding regulation. The NIST AI RMF is a voluntary risk-management framework, not a certification scheme. ISO/IEC 23053 describes systems and does not certify organizational governance."
    },
    {
      "id": "d1-q13",
      "skill": "1.2.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A utility must apply a regulated late-payment fee to every bill that is more than 30 days overdue, with no exceptions permitted. The operations team proposes training a machine learning model to decide when to apply the fee. What should the strategist recommend?",
      "options": [
        "Train an ML model, because it can learn when fees are most likely to be paid",
        "Use rule-based automation, because the logic is fully specified, stable and must be applied identically and auditably",
        "Use a generative AI assistant to draft a fee decision for each account",
        "Use an AI agent so the fee process can run autonomously"
      ],
      "answer": [1],
      "explanation": "When the logic can be written down completely, rarely changes and must be deterministic and auditable, rule-based automation is cheaper, faster and lower risk. AWS guidance notes you do not need ML when the target value can be determined with simple rules. ML, GenAI and agents all add probabilistic behavior and cost that this process cannot tolerate."
    },
    {
      "id": "d1-q14",
      "skill": "1.2.1",
      "type": "single",
      "difficulty": "hard",
      "question": "An insurer processes 60,000 claims a month. Regulations require that any claim above a statutory amount is always reviewed by a licensed adjuster. Below that amount, the insurer wants to identify the small share of claims most likely to be fraudulent for investigation, a judgment that depends on dozens of interacting factors that change over time. Which design is MOST appropriate?",
      "options": [
        "Rule-based automation for everything, because insurance rules are well documented",
        "An ML model for everything, including the statutory review requirement",
        "Rules to enforce the statutory review threshold and an ML model to prioritize fraud investigation below it",
        "A generative AI model to write a narrative about each claim for adjusters to read"
      ],
      "answer": [2],
      "explanation": "The hybrid design matches each requirement to the right tool: the statutory threshold is fixed and must be deterministic (rules), while fraud prioritization involves many shifting factors at a scale humans cannot handle (ML). Rules alone cannot capture the fraud judgment; ML alone would make the mandatory review probabilistic, which is unacceptable. Generating narratives does not address prioritization or the compliance constraint."
    },
    {
      "id": "d1-q15",
      "skill": "1.2.2",
      "type": "multi",
      "difficulty": "medium",
      "question": "A software vendor markets its product as an AI agent. A strategist wants to verify whether it is truly agentic rather than a conversational assistant. Which THREE capabilities are core characteristics of an AI agent?",
      "options": [
        "It pursues a goal across multiple steps and decides its own next actions without a human prompting each step",
        "It can call external tools, APIs and systems to take actions beyond generating text",
        "It is trained exclusively on structured data",
        "It can collaborate with or delegate to other specialized agents under an orchestration strategy",
        "It always produces deterministic outputs for the same input",
        "It requires no governance because it operates autonomously"
      ],
      "answer": [0, 1, 3],
      "explanation": "Autonomy toward a goal, tool use, and agent-to-agent collaboration under orchestration are defining agent capabilities, alongside planning and memory. Agents are typically powered by foundation models that handle unstructured inputs, not exclusively structured data. Agent outputs are probabilistic, not deterministic. Autonomy increases, rather than removes, the need for governance such as scoped permissions, approval thresholds and observability."
    },
    {
      "id": "d1-q16",
      "skill": "1.2.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A bank wants a single customer-facing entry point that can handle questions about existing mortgages, start new mortgage applications and answer general banking questions, each requiring different systems, knowledge bases and compliance guardrails. Which orchestration strategy is MOST appropriate?",
      "options": [
        "One monolithic agent with access to every system and all knowledge bases",
        "A supervisor agent that routes requests to specialized collaborator agents, each with clearly separated roles and its own tools and guardrails",
        "Three independent chatbots that customers must choose between",
        "A rule-based menu system, because agents cannot route requests"
      ],
      "answer": [1],
      "explanation": "The supervisor-and-collaborator (hierarchical) pattern, as used in Amazon Bedrock multi-agent collaboration, gives one entry point while keeping each specialist narrow, testable and governed by its own guardrails; roles should be clearly designated with minimal overlap. A monolithic agent is harder to test, secure and audit. Separate chatbots push routing onto the customer. Agents can route requests, so a static menu discards the value of natural-language understanding."
    },
    {
      "id": "d1-q17",
      "skill": "1.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A bank's fraud model has not been changed since launch, yet after nine months the fraud team reports a steady rise in missed cases. Analysis shows fraudsters have adopted new tactics so that signals that once indicated fraud are now common in legitimate transactions. Which term BEST describes this situation?",
      "options": [
        "Data drift, because the model's code has changed",
        "Concept drift, because the relationship between inputs and the fraud outcome has changed",
        "Overfitting, because the model was trained for too long",
        "Prompt injection, because attackers manipulated the model's instructions"
      ],
      "answer": [1],
      "explanation": "Concept drift occurs when the relationship between inputs and the predicted outcome changes, which is exactly what new fraud tactics cause. Data drift refers to changes in input distributions (and the code did not change). Overfitting is a training-time generalization problem, not a change nine months later. Prompt injection concerns GenAI inputs, not a tabular fraud model."
    },
    {
      "id": "d1-q18",
      "skill": "1.2.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A retailer is about to approve the budget for a demand-forecasting model. The strategist wants to make sure the proposal reflects how AI systems behave after deployment. Which TWO items should be required in the proposal?",
      "options": [
        "A recurring budget and named owner for monitoring performance against a baseline and retraining when thresholds are exceeded",
        "A statement that the model will not need changes once it is accurate at launch",
        "Alert thresholds and escalation criteria that define when degradation triggers investigation or rollback",
        "A commitment to retrain the model every month regardless of observed performance",
        "A plan to remove human review once the model is live"
      ],
      "answer": [0, 2],
      "explanation": "Models drift as conditions change, so correct proposals include ongoing monitoring with a baseline, ownership and retraining budget, plus thresholds and escalation criteria. Claiming no changes will be needed contradicts how models behave. Retraining on a fixed calendar regardless of drift is an anti-pattern identified by AWS guidance; retraining should be evidence-driven. Removing human oversight entirely increases risk rather than managing it."
    },
    {
      "id": "d1-q19",
      "skill": "1.2.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A professional services firm discovers that consultants are pasting client documents into several consumer AI chatbots. The CIO proposes blocking all AI websites at the firewall. What should the strategist recommend instead?",
      "options": [
        "Proceed with the firewall block; prohibition is the fastest way to eliminate risk",
        "Publish a transparent tool classification (approved, under evaluation, blocked), provide an approved assistant with enterprise data protections, and establish a fast request process",
        "Allow all tools but require consultants to delete chat histories afterwards",
        "Take no action until a regulator issues specific AI rules"
      ],
      "answer": [1],
      "explanation": "AWS guidance recommends a dual approach: provide approved tooling so the sanctioned path is the easiest path, and build visibility, supported by a published classification and a request process. Blanket bans push usage onto personal devices and remove visibility. Relying on users to delete histories does not stop data leaving the organization. Waiting for regulation leaves active data-leakage risk unmanaged."
    },
    {
      "id": "d1-q20",
      "skill": "1.2.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A manufacturer publishes an AI tool list with approved and blocked categories. Employees complain that new tools they request sit in an unofficial limbo for months, so many keep using them quietly. Which change would MOST improve the program?",
      "options": [
        "Remove the approved list so that employees can use whatever they choose",
        "Add a formal under-evaluation status with an assigned owner, published criteria and a committed review turnaround",
        "Block every tool that is not yet approved and stop accepting requests",
        "Ask the model vendors to decide which tools the company should allow"
      ],
      "answer": [1],
      "explanation": "Transparency requires a visible path for new tools: an under-evaluation status with an owner, criteria and a deadline turns the limbo into a governed process and reduces the incentive to use tools quietly. Removing the list abandons governance. Blocking everything pending review drives usage underground. Vendors have a conflict of interest and cannot assess the company's data classification and regulatory obligations."
    },
    {
      "id": "d1-q21",
      "skill": "1.3.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A marketing team's generative AI tool produces product descriptions that vary widely in length and tone, and some include claims the legal team has not approved. Before any model changes, which prompt improvement is MOST likely to resolve both issues?",
      "options": [
        "Ask the model to be creative and write as much as it wants",
        "Provide a template that specifies brand voice, maximum length, two or three approved example descriptions, and instructs the model to use only the supplied verified product facts",
        "Increase the temperature setting to produce more varied output",
        "Remove all context from the prompt so the model is not biased"
      ],
      "answer": [1],
      "explanation": "Specific instructions, few-shot examples, an explicit output format and grounding in supplied facts are core prompt engineering principles that address inconsistency and unsupported claims at minimal cost. Encouraging unlimited creativity or raising temperature increases variability. Removing context deprives the model of the facts and constraints it needs."
    },
    {
      "id": "d1-q22",
      "skill": "1.3.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A customer-support organization is standardizing how its teams write prompts for a generative AI reply assistant on Amazon Bedrock. Which TWO practices reflect prompt engineering best practices?",
      "options": [
        "Clearly separate instructions, context, examples and the customer's message using delimiters or tags",
        "Keep prompts as short as possible by omitting the task description and letting the model infer it",
        "Treat prompt templates as versioned assets and test them against a set of representative cases before rollout",
        "Assume the model remembers previous conversations automatically across API calls",
        "Avoid giving the model examples, because examples bias the output"
      ],
      "answer": [0, 2],
      "explanation": "Separating prompt components with delimiters or tags and treating templates as versioned, tested assets are recommended practices. Omitting the task description produces vague output; AWS notes both instruction and input are necessary. Models do not recall prior requests unless the history is included in the prompt. Few-shot examples are a recommended way to calibrate output, not something to avoid."
    },
    {
      "id": "d1-q23",
      "skill": "1.3.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A procurement team's GenAI assistant answers questions well for short contracts but, for 300-page master agreements, returns truncated answers and ignores clauses near the end of the document. Costs per query have also risen sharply. What is the MOST appropriate response?",
      "options": [
        "Switch to the model with the largest available context window and send the whole document every time",
        "Adopt a retrieval-based design that sends only the relevant clauses for each question, with summarization for whole-document overviews",
        "Ask users to type shorter questions",
        "Fine-tune the model on the company's contracts so it no longer needs to read them"
      ],
      "answer": [1],
      "explanation": "The symptoms (truncation, lost content, rising token cost) indicate context window and token constraints. Retrieving only relevant passages (RAG) and summarizing reduce tokens per request, improving accuracy and cost. Sending entire documents to a larger-window model raises cost and can degrade accuracy as context grows. Shorter questions do not reduce the document size. Fine-tuning embeds knowledge at training time and does not reliably reproduce specific clauses from new contracts."
    },
    {
      "id": "d1-q24",
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A pharmaceutical company wants a GenAI assistant to answer field-staff questions about dosing guidance that is revised several times a year. Compliance requires that every answer reference the specific source document. Which adaptation technique is MOST appropriate?",
      "options": [
        "Fine-tune a foundation model on the current guidance documents",
        "Use Retrieval Augmented Generation with a knowledge base of the current guidance documents",
        "Rely on the foundation model's general medical knowledge with a carefully written prompt",
        "Train a new foundation model from scratch on company data"
      ],
      "answer": [1],
      "explanation": "RAG retrieves current documents at query time and can cite sources, meeting both the freshness and attribution requirements; Amazon Bedrock Knowledge Bases provides this as a managed capability. Fine-tuning freezes knowledge at training time and cannot cite sources. General model knowledge is not the company's authoritative guidance and offers no attribution. Training a model from scratch is prohibitively expensive and still would not stay current."
    },
    {
      "id": "d1-q25",
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "An insurer's claims team needs settlement letters generated in a tightly regulated structure and tone. The team has tried detailed prompts with several examples and grounding the model in policy documents, but the output structure is still inconsistent. The format rarely changes and the team has thousands of approved past letters. Which approach is MOST appropriate next?",
      "options": [
        "Add more policy documents to the knowledge base",
        "Supervised fine-tuning of a model on the approved past letters to learn the required structure and tone",
        "Increase the context window by moving to a larger model",
        "Switch to rule-based automation to generate the letters"
      ],
      "answer": [1],
      "explanation": "The need is a persistent skill (a stable format and tone) rather than missing facts, prompting and RAG have already been tried, and ample labeled examples exist, which are the conditions for supervised fine-tuning. Adding documents addresses knowledge, not structure. A larger context window does not fix format inconsistency. Letters require generated, case-specific language that fixed rules cannot produce well."
    }
  ]
};
