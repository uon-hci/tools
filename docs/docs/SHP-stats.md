# Studying Human Performance - Statistics

**COURSE**

---

## Basics

### Data types

There are three types of data to consider when doing statistics:

- **Categorical**: data classed into categories,
- **Ordinal**: data that can only be classed by order,
- **Ratio/Interval**: data that can be put on a scale where the relationship between each point is known.

### Measures of central tendency

There are three measures of central tendency to take into account: *mean*, *median* and *mode*.

The **mean** is the average of all numbers and is sometimes called the *arithmetic mean*, and is generally best for *interval* data. In a sample with \\(n\\) elements such as \\(x_1, x_2,..., x_n\\), the mean noted \\(\bar{x}\\) is the sum of all the values divided by the numbers of items:
\\[\bar{x} = \frac{1}{n} \cdot \sum_{i=1}^{n} x_i\\]

The **median** is the value separating the higher half from the lower half of a data sample, commonly thought of as the "*middle*" value. 
Finding the median in a sample only requires the sample to be ranked (sorted, ordered). The median is best to use with *ordinal data*. The basic advantage of the median compared to the mean is that it is not skewed so much by extremely large or small values, and so it may give a better idea of a "*typical*" value.

The **mode** of a set of values is the value that appears most often, the most common entry, best measure for *categorical data*.

---

## Normal distribution

### Definition

The **normal distribution** (also called *Gaussian* or the *bell curve*), is a very common continuous probability distribution. Normal distributions
are very important in statistics and are often used to represent real-valued random varaibles whose distributions are not known.
The normal distribution is useful because of the **central limit theorem** stating that averages of samples converge in distribution to the normal, that is,
they become normally distributed when the number of observations is sufficiently large.

In simpler words, when observing data from large samples, in many cases, the data tends to be around a central value with no bias left or right. This 
distribution is found in many naturally occurring phenomena such as *heights of people*, *size of objects produced by machines*, *errors in measurements*, *blood pressure*, *marks on a test* and many more. The properties of a normal distribution allow to easiliy manipulate variables and compute significant results. 

A normally distributed sample is a sample with equal measures of central tendecy, that is when \\(mean = median = mode\\). When this is not the case, the data sample is said to be **skewed**. A sample can be negatively skewed (\\(mean < median < mode\\)) or positively skewed (\\(mean > median > mode\\)). It is not appropriate to perform various statistical tests on a skewed sample. When the sample is normally distributed with a perfect symetry, exactly 50% of the values are lower than the mean, and exactly 50% are higher.

A normal distribution is noted \\(\mathcal{N}(\mu, \sigma)\\) with \\(\mu\\) the mean, \\(\sigma\\) the standard deviation and \\(\sigma^2\\) the variance.

### Standard deviation

The standard deviation, note \\(\sigma\\), is a measure defining how **spread out** the numbers of a sample are. A low standard deviation indicates that the data points tend to be **close to the mean**, while a high standard deviation indicates that the data points are **spread out over wider range of values**. This measure is the **square root of the variance**. But what is the variance?

The **variance** is defined as the **squared differences from the mean**. Informally, the variance measures how far a set of numbers are spread out from their average value. For a sample with \\(n\\) values, it is calculated with the following formula:
\\[\sigma^2 = \frac{\sum_{i=1}^{n} (x_i - \mu)^2}{n-1}\\]

The **standard deviation** is therefore calculated with:
\\[\sigma = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \mu)^2}{n-1}}\\]

Once the mean and the standard deviation are known, a perfect description of the distribution is given. Generally we find that:

![Standard deviation](img/std.png)

### Standard scores

The standard deviation is a useful tool to generally examine a sample and contextualize values in 1 to 3 standard deviation units from the mean. However, how to know how many standard deviations a specific value is from the mean? 

To convert a value to a standard deviation value (also called a **standard score** or **z-score**):

- **Substract** the mean to the value (*how far from the mean?*),
- **Divided** by the standard deviation (*how many standard deviations?*).

Hence for a value \\(x\\), the z-score \\(z\\) is:
\\[z = \frac{x - \mu}{\sigma}\\]

Doing that operation is called **standardizing**, or converting a *normal distribution* into a *standard normal distribution*. Usually, the entire sample
is standardized at once to simplify the calculations by simply looking up standardized pre-computed tables. The table **D. Normal distribution table** allows
to convert from standard scores to percents, and vice versa.

-- 

## Statistical tests

When doing an experiment, choosing the correct statistical test is very important to obtain significant results. The first step
in doing so is to understand every factor affecting the choice, and how to implement **study design**.

### Experiment outline

An experiment, (or study or research), can be outlined by the following steps:

1. **Research question**: objective, aim, question asked,
2. **Study design**: describing the experiment through hypothesis, variables, data types and participants,
3. **Test selection**: choosing the correct test(s) based on the study design,
4. **Conducting the experiment**: doing the described experiment and collecting data,
5. **Doing the test**: using the data to obtain results through the selected test(s),
6. **Interpretation and conclusion**: making sense of the result and concluding on the research question.

### Study design

#### Defining the problem, aim and hypotheses

The first step in designing a study is to clearly define the problem and issues that require investigation, and what will
be achived by doing it. This is usually represented by a system of **hypotheses**, or *statements of the predicted outcome*. As 
studies manipulate variables and data, the aim of these hypotheses is to predict, understand and validate the relationships between said variables.
Conventionally, there are two types of hypothesis:

- **Experimental**, or *H1*, that predicts a dependent relationship between variables,
- **Null**, or *H0*, that states that variables are not dependent (one does not impact the other).

#### Identify the research variables

The said variables are split in three categories:

- **Independant variables** (*IV*): variables manipulated by the experimented, related to the individual, task, system or environment,
- **Dependant varaibles** (*DV*): varaibles being measured in the experiment, not under the control of the experimenter, possibly affected by the IVs,
- **Controlled variables**: variables that need to be kept constant during the experiment.

#### Allocate participants to the experimental conditions

There are two ways to allocate and distribute the participants across the IVs:

- **Within**: every participant completes every experimental condition,
- **Between**: different participants are allocated to each experimental condition.

#### Assumptions

The experimental hypothesis predicts a dependant relationship between variables, or in other words, independant variables impacting dependant variables. 
A study design can however further predictions by using **assumptions**.

A **one-tailed** hypothesis predicts *how* and in *which direction* an independant variable impacts a dependant variable. For example, if an experimental hypothesis predicts that *music* (IV) impacts *performance* (DV), a one-tailed extension would add that *music* **improves** *performance*, or that *music* **impairs** *performance*. One-tailed tests must be justified: it is for example justified to predict that constant loud noise impairs performance.

In addition, **contrasts** are other assumptions that can be integrated to a study design. Unlike one-tailed assumptions that predict in *which direction* an independant variable affects a dependant variable, contrasts compare the **levels** of an independant variable. For example, if an experimental hypothesis predicts that *music* (IV) impacts *performance* (DV), and that this independant variable has three levels (*classical*, *rock*, *rap*), contrasts could be that *classical* music affects *performance* differently than *rap music*.

#### Data types and analysis

Based on the data types and the variables, a test can either be **parametric** or **non-parametric**.

A **parametric test** is a test that is carried out with the assumption that the data collected follows a well-known distribution (usually the normal distribution), which can be boiled down to the knowledge of just a couple of **parameters**. A parametric test provides generalisations for making statements about the mean of the parent population. Because parametric test are based on a distribution, the measurement of varaibles on **interval** or **ratio** level, with the mean used as the measure of central tendency.

On the other hand, a **non-parametric test** has no know information about the population and is not based on any known distribution. Because non-parametric tests don't require assumptions about the nature of their distributions, they are also called **distribution-free**. These tests hence assume that the variables are measured on a **nominal** (categorical) or **ordinal** level, with the median as the measure of central tendency.

### Significance

Statistical tests try to answer a question, based on the available data. When rejecting a null hypothesis (observing that there is indeed a relation between variables), there is a probability that this rejection is due to **chance**, that the random variables happen to **misrepresent the reality**. This probability, called **p-value**, represents the chance to reject a null hypothesis when it is **actually true**. Subsequently, the lower the p-value, the more meaningful the result because it is less likely to be caused by **noise**. 

The action to reject the null hypothesis when it is actually true is called an **incorrect conclusion** and more precisely a **Type I error**. It is an experimental error that analysts wants to **avoid** in priority, to not make any false claim. To that end, before conducting the test, a **significance threshold** called \\(\alpha\\) is set, that if exceeded, indicantes a non-significant result. That threshold is usually \\(\alpha = 0.05\\), but particular contexts and fiels of study often require a more strict value, such as \\(\alpha = 0.001\\).

Of course, the opposite action of **failing to reject a null hypothesis** when it is **actually false** is another experimental error called **Type II error**, but is often seen as less serious than the Type I error. The chance to make a Type II error is represented by the probability called \\(\beta\\). The **statistical power** is the probability of correctly rejecting the null hypothesis, because it is **indeed false**.