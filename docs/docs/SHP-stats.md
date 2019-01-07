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